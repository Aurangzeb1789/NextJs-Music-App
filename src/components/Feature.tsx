'use client'
import Link from "next/link";
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient";
import { Rouge_Script } from "next/font/google";


const rouge = Rouge_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}


function Feature() {

  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

  console.log(featuredCourses)

  return <>
    <div className=" bg-gray-900 py-2 px-4 text-white sm:px-8">

      <div className="text-center">
        <h2 className="text-xl text-[#ffba08] font-semibold tracking-wide my-4">Featured Courses</h2>
        <p className="mt-7 text-3xl leading-8 font-extrabold tracking-tight text-[#e5e5e5] sm:text-4xl">Learn With The Best</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map(course =>
            <div className="flex justify-center items-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col   flex-grow text-start h-[180px]">
                  <h2 className="my-2 font-semibold text-[18px] tracking-wider text-[#ffba08] ">{course.title}</h2>
                  <p className="text-[20px] tracking-widest"><span className={rouge.className}>{course.description}</span></p>
                </div>
                <div className="text-center mb-5 ">
                  <button className="px-4 py-2 rounded-md border-[1px] border-white text-[#fefae0] bg-[#fca311]
                                    hover:bg-[#ff7d00] transition duration-200 font-medium">
                    <Link href={"/courses"}>
                      Learn More
                    </Link>
                  </button>
                </div>
              </BackgroundGradient>
            </div>
          )}
        </div>
      </div>

      <div className="my-12 pt-4 text-center">
        <button className="px-4 py-2 rounded-md border-[1px] border-white text-[#fefae0] bg-[#fca311]
                                    hover:bg-[#ff7d00] transition duration-200 font-medium">
          <Link href={"/courses"}>
            View All Courses
          </Link>
        </button>
      </div>

    </div>
  </>
}

export default Feature;