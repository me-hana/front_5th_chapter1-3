import { useState } from "react";
import { UserContext } from "../contexts";
import { UserContextType } from "../types";

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<UserContextType["user"]>(null);

  const login: UserContextType["login"] = (email, password) => {
    console.log("password를 사용하기 위한 로그", password);
    setUser({ id: 1, name: "홍길동", email });
  };
  const logout: UserContextType["logout"] = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
