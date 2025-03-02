import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'
import animatedimager from "../public/animation.png"
function Body() {
  return (
    <div>
         <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold pb-[20px] ">
              Unleash the power of Ai in your software <br />
           
            </h1>
          </>
        }
      >
        <Image
          src={animatedimager}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto w-full rounded-2xl  mt-6 items-center object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}

export default Body