interface IInput {
    type: "text" | "email";
    required: boolean;
    placeholder: string;
    ariaLabelText: string;
}

const Input = ({ type, required, placeholder, ariaLabelText }: IInput) => {
    return (
        <input
            type={type}
            required={required}
            placeholder={placeholder}
            aria-label={ariaLabelText}
            className="border p-2"
        />
    );
};

export default Input;
