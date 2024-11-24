import { RefObject } from "react";

interface IHeader {
    projectsRef: RefObject<HTMLElement>;
    aboutRef: RefObject<HTMLElement>;
    contactRef: RefObject<HTMLElement>;
}

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
                    <li
                        className="hover:cursor-pointer hover:bg-gray-300 p-2 transition-colors duration-300"
                        onClick={() => scrollToSection(projectsRef)}
                    >
                        Projects
                    </li>
                    <li
                        className="hover:cursor-pointer hover:bg-gray-300 p-2 transition-colors duration-300"
                        onClick={() => scrollToSection(aboutRef)}
                    >
                        About
                    </li>
                    <li
                        className="hover:cursor-pointer hover:bg-gray-300 p-2 transition-colors duration-300"
                        onClick={() => scrollToSection(contactRef)}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
