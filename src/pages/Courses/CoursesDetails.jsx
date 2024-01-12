import { useLoaderData } from "react-router-dom";

const CoursesDetails = () => {
    const { _id, grade, subject, description, teacher } = useLoaderData()

    return (
        <div>
            <div className="bg-white px-6 py-12 font-[sans-serif] mt-5">
                <div className="container mx-auto p-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div>
                            <h2 className="text-4xl font-bold mb-4">Course Name : {subject}</h2>
                            <p className="mb-10 text-xl">Teacher Name : {teacher}</p>
                            <p className="text-gray-700">
                                {description}
                            </p>
                            <ul className="list-disc text-sm text-gray-700 space-y-2 pl-4 mt-4">
                                <li>Discover innovative ideas.</li>
                                <li>Create unique projects.</li>
                                <li>Collaborate with like-minded individuals.</li>
                                <li>Transform your visions into reality.</li>
                            </ul>
                            <div className="mt-6">
                                <a href="#" className="text-purple-600 text-sm font-semibold hover:underline">Get Started</a>
                            </div>
                        </div>
                        <div>
                            <img src="https://readymadeui.com/management-img.webp" alt="Image" className="rounded-md object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;