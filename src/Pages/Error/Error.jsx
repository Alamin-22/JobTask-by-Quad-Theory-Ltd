import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-red-500 text-5xl min-h-screen flex items-center justify-center">
            this is the error page
            <Link to={"/"} className="btn btn-primary ">
                Home
            </Link>
        </div>
    );
};

export default Error;