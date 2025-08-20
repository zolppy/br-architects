import { ReactNode } from "react";

interface ISubmitButton {
  children: ReactNode;
}

const SubmitButton = ({ children }: ISubmitButton) => {
  return (
    <button
      type="submit"
      className="uppercase bg-black text-white py-2 px-5 w-fit lg:hover:bg-gray-300 lg:hover:text-black lg:transition-colors lg:duration-300"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
