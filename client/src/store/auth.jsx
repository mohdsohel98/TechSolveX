




import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState("");

  const authorizationToken = token ? `Bearer ${token}` : "";

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("Token:", token);
  console.log("isLoggedIn:", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/auth/user', {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.log("Unauthorized! Please log in again.");
          LogoutUser();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('User data:', data.userData);
      setUser(data.userData);
      setIsLoading(false);
    } 
   
    catch (error) {
      console.log("Error fetching user data:", error);
      setIsLoading(false);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data/service', {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`Services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider 
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken , isLoading}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
