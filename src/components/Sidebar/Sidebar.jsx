import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <li><Link to='dashboard/courseUpload'>Upload Courses</Link></li>
        </div>
    );
};

export default Sidebar;