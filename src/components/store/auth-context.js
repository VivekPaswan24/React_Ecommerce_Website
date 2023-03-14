import React from "react";

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    emailId:'',
    login:(token)=>{},
    logout:()=>{},
    addEmailId:(email)=>{}
})

export default AuthContext;