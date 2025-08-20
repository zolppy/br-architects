import { ReactNode } from "react";

interface IList {
  children: ReactNode;
}

const List = ({ children }: IList) => {
  return (
    <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </ul>
  );
};

export default List;
