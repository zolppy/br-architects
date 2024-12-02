import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import type IPerson from "@/app/utils/interfaces/person";

const Person = ({ name, position, description, img }: Omit<IPerson, "id">) => {
    const { src, alt, title } = img;

    return (
        <li className="flex flex-col gap-y-2">
            <Image
                src={src}
                alt={alt}
                title={title}
                className="w-full grayscale-[80%]"
            />
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="text-gray-500">{position}</p>
            <p>{description}</p>
            <ContactButton>Contact</ContactButton>
        </li>
    );
};

export default Person;
