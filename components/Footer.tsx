import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Footer() {
  return (
    <BackgroundBeamsWithCollision className="w-full justify-center  items-center dark:text-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full  px-6 ">
        <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:mx-[40px] md:ml-[160px] ml-[10px]">
          <div className=" justify-center  items-center">
            <div className="justify-start flex items-center">
              <h3 className="text-lg sm:text-xl font-bold text-white">Company</h3>
            </div>
            <div className="flex justify-start items-center">
              <ul className="">
                <li><a href="/about" className="  transition-colors">About Us</a></li>
                <li><a href="/team" className="  transition-colors">Our Team</a></li>
                <li><a href="/careers" className="  transition-colors">Careers</a></li>
                <li><a href="/blog" className="  transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>




          <div className=" justify-center  items-center">
            <div className="justify-start flex items-center">
              <h3 className="text-lg sm:text-xl font-bold text-white">Services</h3>
            </div>
            <div className="flex justify-start ">
            <ul className="">
              <li><a href="/services/web-development" className="  transition-colors">Web Development</a></li>
              <li><a href="/services/mobile-apps" className="  transition-colors">Mobile Apps</a></li>
              <li><a href="/services/cloud-solutions" className="  transition-colors">Cloud Solutions</a></li>
              <li><a href="/services/consulting" className="  transition-colors">Consulting</a></li>
            </ul>
            </div>
          </div>



          <div className=" justify-center    items-center">
            <div className="justify-start flex items-center">
              <h3 className="text-lg sm:text-xl font-bold text-white">Legal</h3>
            </div>
            <div className="flex justify-start items-center">
            <ul className="">
              <li><a href="/privacy" className="  transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="  transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="  transition-colors">Cookie Policy</a></li>
              <li><a href="/compliance" className="  transition-colors">Compliance</a></li>
            </ul>
            </div>
          </div>

          <div className=" justify-center  items-center">
            <div className="justify-start flex items-center">
              <h3 className="text-lg sm:text-xl font-bold text-white">Contact</h3>
            </div>
            <div className="flex justify-start items-center">
            <ul className="">
              <li className="">Badhsahpur</li>
              <li className="">Sector 69 Gurugram</li>
              <li><a href="mailto:Scalesaas@gmail.com" className="  transition-colors">Scalesaas@gmail.com</a></li>
              <li><a href="tel:+919588368052" className="  transition-colors">+919588368052</a></li>
            </ul>
            </div>
          </div>
























        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className=" text-sm sm:text-base text-center sm:text-left">© 2025 Your Company. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="  transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="  transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="  transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
