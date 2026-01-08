import { v4 as uuidv4 } from 'uuid';
import { createContext, ReactNode, useContext, useState } from "react";
import { useEffect } from "react";

type teste = {
    token: string,
    setToken: (value: string) => void;
} 

const SessionContext = createContext({} as teste);

export const SessionProvider = ({
  children,
}: {
  children: ReactNode
}) => {
    const [token, setToken] = useState<string>(() => {
      if (typeof window === 'undefined') return uuidv4();
      return (
        window.localStorage.getItem('eventKey') ??
        window.localStorage.getItem('sessionToken') ??
        uuidv4()
      );
    });

    useEffect(() => {
      if (typeof window === 'undefined') return;
      window.localStorage.setItem('eventKey', token);
      window.localStorage.removeItem('sessionToken');
    }, [token]);

    return (
        <SessionContext.Provider value={{token ,setToken}}>
        {children}
        </SessionContext.Provider>
    )
}

export const useSession = () => useContext(SessionContext);