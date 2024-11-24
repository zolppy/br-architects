interface IInput {
    type: "text" | "email";
    required: boolean;
    placeholder: string;
}

const Input = ({ type, required, placeholder }: IInput) => {
    return (
        <input
            type={type}
            required={required}
            placeholder={placeholder}
            className="border p-2"
        />
    );
};

export default Input;
