import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// @ts-ignore
import AppInfoParser from 'app-info-parser';
import { writeFile, unlink, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  let tempFilePath: string | null = null;

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Verify it's an IPA file
    if (!file.name.toLowerCase().endsWith('.ipa')) {
      return NextResponse.json({ error: "File must be an IPA" }, { status: 400 });
    }

    // Convert File to Buffer using modern method
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Write to isolated temporary file in project cache instead of os.tmpdir
    const tempDir = join(process.cwd(), '.next', 'cache', 'tmp');
    await mkdir(tempDir, { recursive: true });
    const tempFileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.ipa`;
    tempFilePath = join(tempDir, tempFileName);
    await writeFile(tempFilePath, buffer);

    // Parse the IPA file
    const parser = new AppInfoParser(tempFilePath);
    const info = await parser.parse();

    return NextResponse.json({
      bundle_id: info.CFBundleIdentifier,
      version: info.CFBundleShortVersionString || info.CFBundleVersion,
      build: info.CFBundleVersion,
      name: info.CFBundleDisplayName || info.CFBundleName || info.name,
      icon: info.icon ? `data:image/png;base64,${info.icon}` : null,
    });
  } catch (err) {
    console.error("IPA Parsing Error:", err);
    return NextResponse.json({ 
      error: "Failed to parse IPA file", 
      details: err instanceof Error ? err.message : String(err) 
    }, { status: 500 });
  } finally {
    // Clean up temporary file
    if (tempFilePath) {
      try {
        await unlink(tempFilePath);
      } catch (unlinkErr) {
        console.error("Failed to delete temp file:", unlinkErr);
      }
    }
  }
}