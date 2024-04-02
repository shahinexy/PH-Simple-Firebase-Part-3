import { useContext } from "react";
import { AuthContext } from "../provaider/AuthProvider/AuthProvaider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return <span className="loading loading-bars loading-lg"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivetRoute;