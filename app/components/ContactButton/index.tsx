import { ReactNode } from "react";

interface IContactButton {
  children: ReactNode;
}

const ContactButton = ({ children }: IContactButton) => {
  return (
    <button className="bg-gray-100 p-2 active:bg-gray-300 lg:hover:bg-gray-300 lg:transition-colors lg:duration-300">
      {children}
    </button>
  );
};

export default ContactButton;
