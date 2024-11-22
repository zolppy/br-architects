import house1 from "./assets/houses/house1.jpg";
import house2 from "./assets/houses/house2.jpg";
import house3 from "./assets/houses/house3.jpg";
import house4 from "./assets/houses/house4.jpg";

import person1 from "./assets/people/person1.jpg";
import person2 from "./assets/people/person2.jpg";
import person3 from "./assets/people/person3.jpg";
import person4 from "./assets/people/person4.jpg";

const projects = [
    {
        id: 1,
        title: "Summer House",
        imgPath: house1,
    },
    {
        id: 2,
        title: "Brick House",
        imgPath: house2,
    },
    {
        id: 3,
        title: "Renovated",
        imgPath: house3,
    },
    {
        id: 4,
        title: "Barn House",
        imgPath: house4,
    },
    {
        id: 5,
        title: "Summer House",
        imgPath: house2,
    },
    {
        id: 6,
        title: "Brick House",
        imgPath: house1,
    },
    {
        id: 7,
        title: "Renovated",
        imgPath: house4,
    },
    {
        id: 8,
        title: "Barn House",
        imgPath: house3,
    },
];

const people = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO & Founder",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person1,
    },
    {
        id: 2,
        name: "Jane Doe",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person2,
    },
    {
        id: 3,
        name: "Mike Ross",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person3,
    },
    {
        id: 4,
        name: "Dan Star",
        position: "Architect",
        description:
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
        imgPath: person4,
    },
];

export { people, projects };
