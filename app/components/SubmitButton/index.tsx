const SubmitButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button
            type="submit"
            className="uppercase bg-black text-white py-2 px-5 w-fit hover:bg-gray-300 hover:text-black transition-colors duration-300"
        >
            {children}
        </button>
    );
};

export default SubmitButton;
