import IPerson from "@/app/utils/interfaces/person";
import person1 from "@/public/people/person1.jpg";
import person2 from "@/public/people/person2.jpg";
import person3 from "@/public/people/person3.jpg";
import person4 from "@/public/people/person4.jpg";

const people: IPerson[] = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO & Founder",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: {
            src: person1,
            alt: "Man with black hair and gray beard smiling",
            title: "John Doe",
        },
    },
    {
        id: 2,
        name: "Jane Doe",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: {
            src: person2,
            alt: "Blonde woman wearing a hat, necklace and floral blouse, there seems to be a sea behind her",
            title: "Jane Doe",
        },
    },
    {
        id: 3,
        name: "Mike Ross",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: {
            src: person3,
            alt: "Elderly man with gray hair and smooth face. He is wearing a green shirt and tie.",
            title: "Mike Ross",
        },
    },
    {
        id: 4,
        name: "Dan Star",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        img: {
            src: person4,
            alt: "Black man wearing glasses on his head and looking up",
            title: "Dan Star",
        },
    },
];

export default people;
