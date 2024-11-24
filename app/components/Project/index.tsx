import Image from "next/image";
import { StaticImageData } from "next/image";

interface IProject {
    title: string;
    imgPath: StaticImageData;
    imgAlt: string;
    imgTitle: string;
}

const Project = ({ title, imgPath, imgAlt, imgTitle }: IProject) => {
    return (
        <li className="relative">
            <div className="absolute bg-black text-white p-2">
                <h3>{title}</h3>
            </div>
            <Image
                src={imgPath}
                alt={imgAlt}
                title={imgTitle}
                loading="lazy"
                className="w-full"
            />
        </li>
    );
};

export default Project;
