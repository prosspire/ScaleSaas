import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AppSharePage({ params }: PageProps) {
  const { id } = await params;

  const { data: app, error } = await supabase
    .from('apps')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !app) {
    notFound();
  }

  // This links to your XML manifest route
  const manifestUrl = `https://yourdomain.com/api/manifest/${id}`;
  const installLink = `itms-services://?action=download-manifest&url=${encodeURIComponent(manifestUrl)}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 text-center">
        {/* App Icon Placeholder */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          {app.name.charAt(0)}
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{app.name}</h1>
        <p className="text-gray-500 mb-6">Version {app.version || '1.0.0'} ({app.bundle_id})</p>

        <div className="space-y-4">
          <a
            href={installLink}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-lg"
          >
            Install Application
          </a>
          
          <p className="text-xs text-gray-400">
            Note: This link only works on iOS devices. Ensure you have the necessary permissions to install enterprise apps.
          </p>
        </div>

        <hr className="my-8 border-gray-100" />

        <div className="text-left">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">App Information</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Platform</p>
              <p className="font-medium text-gray-700">iOS (IPA)</p>
            </div>
            <div>
              <p className="text-gray-400">Build ID</p>
              <p className="font-medium text-gray-700">#{app.id.slice(0, 8)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-gray-400 text-sm">Powered by AppsOnAir Clone</p>
    </div>
  );
}