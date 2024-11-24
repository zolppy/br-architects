const Header = () => {
    return (
        <header className="py-4 px-6 shadow-lg h-[60px] flex items-center fixed left-0 top-0 w-full bg-white z-10 md:justify-between">
            <h1>
                <span className="font-bold">BR</span> Architects
            </h1>
            <nav className="hidden md:block">
                <ul className="flex gap-x-8">
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
