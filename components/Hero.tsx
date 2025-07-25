"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FloatingReviewCards } from "@/components/reviews/review";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
  import {   EmailFormschemaType } from "@/lib/schema";
  import { IEmaildetail } from "@/lib/types";
  import { useEffect  } from "react";
    import { useForm } from "react-hook-form";
    import {
    Form,
    FormControl,
    FormItem,
    FormField,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function Hero( {
    onHandleSubmit,
    defaultEmail,
  }: {
    defaultEmail: IEmaildetail;
    onHandleSubmit: (data: EmailFormschemaType) => void;
  }) {  
    // Regular expression for email validation

    const form = useForm<EmailFormschemaType>({
      mode: "all",
      // resolver: zodResolver(EmailFormschema),

      defaultValues: {
        email: defaultEmail?.email || "",
      },
    });

    const onSubmit = (data: EmailFormschemaType) => {
        onHandleSubmit(data);
   
    };
    useEffect(() => {
      if (form.getValues().email) {
        form.setValue("created_at", new Date().toISOString().slice(0, 16));
      }
    }, [form.getValues().email]);

    // Run the intro fade-in and then animation sequence

   
    
  

  const headline = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Scale Saas.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen w-full  relative flex flex-col items-center justify-center antialiased px-4">

      <div className="fixed md:block  hidden right-0 top-1/4 -translate-y-1/2 z-30">
        <FloatingReviewCards className="scale-[0.8]" />
      </div>
      
      <div className="max-w-6xl pt-[100px] md:pt-[200px] w-full mx-auto">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-6xl sm:text-7xl dark:text-white  md:text-8xl lg:text-9xl font-bold text-center  relative z-20">
            Scale Saas
          </h1>
          
          <div className="w-full max-w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-[10%] sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[80%] sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-[10%] sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[80%] sm:w-3/4" />
            <div className="absolute inset-x-[30%] sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[40%] sm:w-1/4 blur-sm" />
            <div className="absolute inset-x-[30%] sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[40%] sm:w-1/4" />
          </div>
        </div>

        <TypewriterEffectSmooth className="justify-center" words={headline} />
        
        <div className="max-w-5xl mx-auto px-4">
          <p className="dark:text-white italic text-center text-ss sm:text-lg  md:text-2xl mt-12 sm:mt-[80px]">
            &quot; We specialize in building intelligent, scalable software solutions that leverage the power of artificial intelligence. From custom AI integrations to full-scale SaaS platforms, our team delivers cutting-edge technology that drives business growth. &quot;
          </p>   
        </div>   

<div className="flex justify-center items-center  px-4">
  <div className="w-full max-w-4xl sm:mt-20 md:mt-24 relative z-10">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="pt-8 sm:pt-10 md:pt-14">
          {/* Responsive container with better breakpoints */}
          <div className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] mx-auto p-1 border border-[#7A7979] rounded-full flex items-center gap-2">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      className="flex-1 min-w-0 bg-black placeholder-white text-white border-none mx-2 sm:mx-3 md:mx-4 py-2 sm:py-3 md:py-4 lg:py-5 text-xs sm:text-sm md:text-lg lg:text-xl font-gilroy focus:outline-none focus:ring-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Responsive button */}
            <div className="flex-shrink-0 pr-1">
              <HoverBorderGradient
                containerClassName="rounded-full"
                typeof="submit"
                as="button"
                className="flex justify-center items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 whitespace-nowrap"
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-gilroy">
                  Get Consultation
                </span>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </form>
    </Form>

    {/* Additional content area - responsive */}
    <div className="mt-4 md:mt-6 flex justify-center items-center text-center">
      {/* Add any additional content here */}
    </div>
  </div>
</div>

        <div className="mt-6 dark:text-white text-center text-neutral-500 text-sm relative z-10">
          Trusted by innovative companies to build their AI-powered solutions
        </div>
      </div>
      
      <BackgroundBeams />
    </div>
  )
}
