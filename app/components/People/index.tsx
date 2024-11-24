import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import { StaticImageData } from "next/image";

interface IPeople {
    name: string;
    position: string;
    description: string;
    imgPath: StaticImageData;
    imgAlt: string;
    imgTitle: string;
}

const People = ({
    name,
    position,
    description,
    imgPath,
    imgAlt,
    imgTitle,
}: IPeople) => {
    return (
        <li className="flex flex-col gap-y-2">
            <Image
                src={imgPath}
                alt={imgAlt}
                title={imgTitle}
                loading="lazy"
                className="w-full grayscale-[80%]"
            />
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="text-gray-500">{position}</p>
            <p>{description}</p>
            <ContactButton>Contact</ContactButton>
        </li>
    );
};

export default People;
