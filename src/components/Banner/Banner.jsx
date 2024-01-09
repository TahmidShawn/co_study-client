
const Banner = () => {
    return (
        // <div className="grid grid-cols-1 gap-5 px-8 lg:px-4 lg:grid-cols-2 mt-10 md:mt-20">
        //     <div className="font-bold">
        //         <h2 className="text-4xl text-center lg:text-left">Online Learning and Collaborative Study Platform</h2>
        //     </div>
        //     <div className="text-justify lg:mt-0">
        //         <p className="text-sm">
        //             Welcome to Co Study, your online destination for collaborative group study and dynamic online courses! Explore our platform designed to enhance your learning experience. Engage in interactive group study sessions or choose from our diverse range of online courses to elevate your skills. Join the Co Study community and embark on a collaborative journey towards knowledge and achievement.
        //         </p>
        //     </div>
        // </div>

        <div className="py-10">
            <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
                <div className="text-left">
                    <h2 className="text-center md:text-left leading-snug tracking-wide  text-4xl font-bold mb-6">Online <span className="text-[#00A8C6]">Learning</span> and <br /><span className="text-[#00A8C6]">Collaborative Study</span> Platform</h2>
                    <p className="mb-4 mt-10 text-base text-justify  leading-snug tracking-wide">Welcome to Co Study, your online destination for collaborative group study and dynamic online courses! Explore our platform designed to enhance your learning experience. Engage in interactive group study sessions or choose from our diverse range of online courses to elevate your skills. Join the Co Study community and embark on a collaborative journey towards knowledge and achievement.</p>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-12">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                            </svg>
                            <h6 className="text-base font-semibold ml-4">Study</h6>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                            </svg>
                            <h6 className="text-base font-semibold ml-4">Resource</h6>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                            </svg>
                            <h6 className="text-base font-semibold ml-4">Support</h6>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                            </svg>
                            <h6 className="text-base font-semibold ml-4">Courses</h6>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                            </svg>
                            <h6 className="text-base font-semibold ml-4">Instructor</h6>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
                            </svg>
                            <h6 className="text-base font-semibold ml-4">Communication</h6>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-cover w-full h-full" />
                </div>
            </div>
        </div>

    );
};

export default Banner;