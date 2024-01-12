import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <li><Link to='courseUpload'>Upload Courses</Link></li>
            <li><Link to='allUsers'>All Users</Link></li>
        </div>
    );
};

export default Sidebar;