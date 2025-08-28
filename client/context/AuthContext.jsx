import { createContext } from "react";
import axios from 'axios'

const backendUrl =import.meta.env.VITE_BACKEND;
axios.defaults.baseURL =backendUrl;

export const AuthContext=createContext();
export const AuthProvider=({children})=>{

    const [token, setToken] =useState(localStorage.getItem("token"));
    const [authUser, setAuthUser]=useState(null);
    const [onlineUsers, setOnlineUsers]=useState([]);
    const [socket, setSocke]=useState(null);


    
    return(
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>
    )
}