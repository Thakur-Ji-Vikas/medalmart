"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { User } from "@/types/user";

/* -------------------- */
/* Context Type         */
/* -------------------- */

type AuthContextType = {
  user: User | null;

  login: (user: User) => void;

  logout: () => void;
};

/* -------------------- */
/* Create Context       */
/* -------------------- */

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

/* -------------------- */
/* Provider             */
/* -------------------- */

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  /* -------------------- */
  /* Restore Login        */
  /* -------------------- */

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /* -------------------- */
  /* Login               */
  /* -------------------- */

  function login(user: User) {
    setUser(user);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );
  }

  /* -------------------- */
  /* Logout              */
  /* -------------------- */

  function logout() {
    setUser(null);

    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* -------------------- */
/* Hook                 */
/* -------------------- */

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );
  }

  return context;
}