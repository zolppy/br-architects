import Image from "next/image";
import { StaticImageData } from "next/image";

interface IPeople {
    name: string;
    position: string;
    description: string;
    imgPath: StaticImageData;
}

const People = ({ name, position, description, imgPath }: IPeople) => {
    return (
        <li className="flex flex-col gap-y-4">
            <Image src={imgPath} alt="" loading="lazy" />
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="text-gray-500">{position}</p>
            <p>{description}</p>
            <button className="bg-gray-100 p-2 hover:bg-gray-300">
                Contact
            </button>
        </li>
    );
};

export default People;
