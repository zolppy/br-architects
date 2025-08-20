import { ReactNode, RefObject } from "react";

interface ILi {
  children: ReactNode;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  ref: RefObject<HTMLElement>;
}

interface IHeader {
  projectsRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

const Li = ({ children, scrollToSection, ref }: ILi) => {
  return (
    <li
      className="active:bg-gray-300 lg:hover:cursor-pointer lg:hover:bg-gray-300 p-2 lg:transition-colors lg:duration-300"
      onClick={() => scrollToSection(ref)}
    >
      {children}
    </li>
  );
};

const Header = ({ projectsRef, aboutRef, contactRef }: IHeader) => {
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="py-4 px-6 shadow-lg h-[60px] flex items-center fixed left-0 top-0 w-full bg-white z-10 md:justify-between">
      <h1>
        <span className="font-bold">BR</span> Architects
      </h1>
      <nav className="hidden md:block">
        <ul className="flex gap-x-8">
          <Li scrollToSection={scrollToSection} ref={projectsRef}>
            Projects
          </Li>
          <Li scrollToSection={scrollToSection} ref={aboutRef}>
            About
          </Li>
          <Li scrollToSection={scrollToSection} ref={contactRef}>
            Contact
          </Li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
