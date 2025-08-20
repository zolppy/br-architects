import { ReactNode } from "react";

interface IH2 {
  children: ReactNode;
}

const H2 = ({ children }: IH2) => {
  return <h2 className="font-bold text-2xl">{children}</h2>;
};

export default H2;
