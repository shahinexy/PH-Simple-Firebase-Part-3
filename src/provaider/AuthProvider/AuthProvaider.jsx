import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvaider = ({children}) => {
    const authInfo = {name: 'shahin alam'}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvaider.propTypes ={
    children: PropTypes.node
}

export default AuthProvaider;