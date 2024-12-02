import type IImage from "@/app/utils/interfaces/image";

interface IPerson {
    id: number;
    name: string;
    position: string;
    description: string;
    img: IImage;
}

export default IPerson;
