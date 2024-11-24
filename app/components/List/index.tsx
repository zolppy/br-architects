const List = ({ children }: { children: React.ReactNode }) => {
    return (
        <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {children}
        </ul>
    );
};

export default List;
