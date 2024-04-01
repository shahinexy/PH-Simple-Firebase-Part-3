import { useContext } from "react";
import { AuthContext } from "../../provaider/AuthProvider/AuthProvaider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            This is home page of {authInfo.name}
        </div>
    );
};

export default Home;