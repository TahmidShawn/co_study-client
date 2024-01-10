/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Course = ({ course }) => {
    const { _id, grade, subject, description, teacher } = course
    return (
        <Link to={`/courses/${_id}`}>
            <div className="cursor-pointer rounded overflow-hidden group">
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                        <span className="text-base font-medium block text-gray-800 mb-2"> Class: {grade} | {teacher} </span>
                        <h3 className="text-xl font-bold text-[#333]">{subject}</h3>
                        <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                            <p className="text-gray-600 text-sm">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >

    );
};

export default Course;