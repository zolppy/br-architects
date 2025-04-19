import { BsCupHotFill } from "react-icons/bs";

const CoffeeBtn = () => {
    return (
        <a
            target="_blank"
            href="https://ko-fi.com/zolppy"
            className="fixed -translate-y-1/2 -translate-x-1/2 bg-[#f44336] text-4xl p-3 rounded-full right-0 bottom-0 active:bg-black lg:hover:cursor-pointer lg:hover:bg-black text-white"
        >
            <BsCupHotFill />
        </a>
    );
};

CoffeeBtn.displayName = "CoffeeBtn";

export default CoffeeBtn;
