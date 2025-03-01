import Hero from "@/components/Hero";
import Body from "@/components/Body";
import { FullNavbar } from "@/components/Navbar/Navbar"



export default function page() {
 

  return (
    <div className="min-h-screen w-full bg-neutral-950  flex flex-col items-center justify-center antialiased px-4">
              <FullNavbar/>

      <div  className=" md:mt-[200px]">
      <Hero/>
      </div>

<div className="h-[50vh] w-full bg-neutral-950">
<Body/>
</div>
    </div>
  )
}
