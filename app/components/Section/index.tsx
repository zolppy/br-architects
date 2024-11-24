const Section = ({ children }: { children: React.ReactNode }) => {
    return <section className="px-5 flex flex-col gap-y-8">{children}</section>;
};

export default Section;
