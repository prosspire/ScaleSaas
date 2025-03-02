import Hero from "@/components/Hero";
import Body from "@/components/Body";
import { FullNavbar } from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer";
import { MainSection } from "@/components/MainSection";
export default function page() {
 

  return (
    <div className=" dark:bg-neutral-950" >
              <FullNavbar/>

      <div  className="">
      <Hero/>
      </div>


      <div className="px-2 mt-[30px]">
      <MainSection/>
      </div>

<div className="h-[110vh] w-full ">
<Body/>
</div>


<div className="">
  <Footer/>
</div>
    </div>
  )
}
