import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (

        <div className="bg-white p-6 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 md:max-w-7xl max-w-lg mx-auto">
                <div className="">
                    <h2 className="text-4xl font-bold text-[#00A8C6] uppercase mb-6">Courses</h2>
                    <h2 className="text-3xl font-extrabold text-[#333] uppercase leading-10">Discover Our Latest Courses</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:col-span-2">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Courses;