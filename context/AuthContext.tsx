"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// User model
type User = {
  name: string;
  email: string;
};

// Context interface
type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  // Auth state
  const [user, setUser] = useState<User | null>(null);

  // Restore login after refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login
  function login(user: User) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Logout
  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  // Provide context
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

// Custom hook
export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider"
    );
  }

  return context;
}