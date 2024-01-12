import { useLoaderData } from "react-router-dom";
import AllUser from "./AllUser";

const AllUsers = () => {
    const allUsers = useLoaderData()
    console.log(allUsers);
    return (
        <div>
            {
                allUsers?.map(allUser => <AllUser key={allUser._id} allUser={allUser}></AllUser>)
            }
        </div>
    );
};

export default AllUsers;