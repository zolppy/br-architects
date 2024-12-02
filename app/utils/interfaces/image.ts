import { StaticImageData } from "next/image";

interface IImage {
    src: StaticImageData | string; // pode ser string???
    alt: string;
    title: string;
}

export default IImage;
