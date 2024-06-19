function Footer() {
    return <>
        <div className="w-full flex justify-around py-12 px-4 items-start text-white bg-gray-700 flex-wrap gap-6 sm:gap-8">
            <div className=" w-full text-left lg:w-[25vw]  sm:text-center lg:text-left">
                <h2 className=" font-bold tracking-wider my-4 border-b-2 sm:text-2xl">About Us</h2>
                <div className="flex flex-col gap-2">
                    <p className=" leading-8 md:leading-6 tracking-wide text-sm"> Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>
            </div>
            <div className=" w-full lg:w-[15vw]">
                <h2 className=" font-bold tracking-wider my-4 border-b-2 sm:text-2xl">Quick Link</h2>
                <div>
                    <ul className="flex flex-col gap-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-[15vw]">
                <h2 className=" font-bold tracking-wider my-4 border-b-2 sm:text-2xl">Follow Us</h2>
                <div> 
                    <ul className="flex flex-col gap-2">
                        <li>FaceBook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>

                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-[15vw]">
                <h2 className=" font-bold tracking-wider my-4 border-b-2 sm:text-2xl">Contact us</h2>
                <div className="flex flex-col gap-2">
                    <p>New Delhi, India</p>
                    <p>Delhi 10001</p>
                    <p>Email: info@musicschool.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </div>
        <div>
             <p className="text-center text-xs pt-8 text-white py-10">© 2024 Music School. All rights reserved.</p>
        </div>
    </>
}

export default Footer;