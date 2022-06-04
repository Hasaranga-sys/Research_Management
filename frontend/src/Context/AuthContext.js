
import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext = createContext();

export default ({ children })=>{
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    return (
        <div>
            {!isLoaded ? <h1>
                <div className='container mx-auto w-25'>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>

            </h1> : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
                </AuthContext.Provider>}
        </div>
    )
}