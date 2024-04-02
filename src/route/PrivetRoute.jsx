import { useContext } from "react";
import { AuthContext } from "../provaider/AuthProvider/AuthProvaider";

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;