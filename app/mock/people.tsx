import { StaticImageData } from "next/image";

import person1 from "@/public/people/person1.jpg";
import person2 from "@/public/people/person2.jpg";
import person3 from "@/public/people/person3.jpg";
import person4 from "@/public/people/person4.jpg";

interface IPerson {
    id: number;
    name: string;
    position: string;
    description: string;
    imgPath: StaticImageData;
    imgAlt: string;
    imgTitle: string;
}

const people: IPerson[] = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO & Founder",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person1,
        imgAlt: "Man with black hair and gray beard smiling",
        imgTitle: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person2,
        imgAlt: "Blonde woman wearing a hat, necklace and floral blouse, there seems to be a sea behind her",
        imgTitle: "Jane Doe",
    },
    {
        id: 3,
        name: "Mike Ross",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person3,
        imgAlt: "Elderly man with gray hair and smooth face. He is wearing a green shirt and tie.",
        imgTitle: "Mike Ross",
    },
    {
        id: 4,
        name: "Dan Star",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person4,
        imgAlt: "Black man wearing glasses on his head and looking up",
        imgTitle: "Dan Star",
    },
];

export default people;
