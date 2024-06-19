"use client"
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

function HoverComponent() {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: false,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];




    return <>
        <div>
            <div className="text-center p-3">
                <h2 className="text-xl text-[#ffba08] font-semibold tracking-wide my-4">Free Webinar</h2>
                <p className="mt-7 text-3xl leading-8 font-extrabold tracking-tight text-[#e5e5e5] sm:text-4xl">Enhance Your Musical Journey</p>
            </div>

            <div className=" mx-3">
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: "/"
                    }
                ))} />
            </div>

            <div className=" pb-[2.5rem] text-center">
                <button className="px-4 py-2 rounded-md border-[1px] border-white text-[#fefae0] bg-[#fca311]
                                    hover:bg-[#ff7d00] transition duration-200 font-medium">
                    <Link href={"/"}>
                        View All Webinar
                    </Link>
                </button>
            </div>
        </div>
    </>
}

export default HoverComponent;