"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";


function ContactUs() {
  return <>
    <div className="w-full h-[100vh] flex justify-center items-center bg-black">
      <div className=" p-4 z-10 translate-y-7">
        <div>
          <h1 className=" text-2xl sm:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Us
          </h1>
        </div>
        
          <div>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
              We&apos;re here to help with any questions about our courses,
              programs, or events. Reach out and let us know how we can assist you
              in your musical journey.
            </p>
          </div>

          <div>
            <input type="text" placeholder="youremail@gamil.com"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 py-2 px-3 my-4" />
          </div>

          <div>
            <textarea
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={5}
              required
            ></textarea>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 my-4 border-2 mx-auto"
            > Send Message </button>
          </div>
      </div>
      <BackgroundBeams/>
    </div>
  </>
}

export default ContactUs;



