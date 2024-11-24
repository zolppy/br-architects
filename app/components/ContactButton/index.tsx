const ContactButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="bg-gray-100 p-2 hover:bg-gray-300 transition-colors duration-300">
            {children}
        </button>
    );
};

export default ContactButton;
