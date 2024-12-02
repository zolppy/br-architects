import { StaticImageData } from "next/image";

import house1 from "@/public/houses/house1.jpg";
import house2 from "@/public/houses/house2.jpg";
import house3 from "@/public/houses/house3.jpg";
import house4 from "@/public/houses/house4.jpg";

interface IProject {
    id: number;
    title: string;
    imgPath: StaticImageData;
    imgAlt: string;
    imgTitle: string;
}

const projects: IProject[] = [
    {
        id: 1,
        title: "Summer House",
        imgPath: house1,
        imgAlt: "A house with light gray siding, with two rectangular windows on the upper floor and one on the ground floor. The house is located on a lot with tall vegetation, and a wooden deck with handrails leads to the front door. The scene is illuminated by soft light, suggesting late afternoon or early evening.",
        imgTitle: "Summer House",
    },
    {
        id: 2,
        title: "Brick House",
        imgPath: house2,
        imgAlt: "A row of brick houses with black roofs, two chimneys and rectangular windows. The houses have a symmetrical design and are separated by a small garden. The street in front of the houses is paved and there is a lamppost next to it.",
        imgTitle: "Brick House",
    },
    {
        id: 3,
        title: "Renovated",
        imgPath: house3,
        imgAlt: "Front view of a single-family home with a modern design and straight lines. The house is situated on a flat lot with tall grass and a night sky with thick clouds. Lights on in the windows create a cozy atmosphere.",
        imgTitle: "Renovated",
    },
    {
        id: 4,
        title: "Barn House",
        imgPath: house4,
        imgAlt: "A contemporary house with a dark wood-clad facade and a pitched roof. The roof features several glass windows, providing natural light to the interior. In the background, a clear blue sky with a few clouds serves as a backdrop for the building.",
        imgTitle: "Barn House",
    },
    {
        id: 5,
        title: "Summer House",
        imgPath: house2,
        imgAlt: "A row of brick houses with black roofs, two chimneys and rectangular windows. The houses have a symmetrical design and are separated by a small garden. The street in front of the houses is paved and there is a lamppost next to it.",
        imgTitle: "Summer House",
    },
    {
        id: 6,
        title: "Brick House",
        imgPath: house1,
        imgAlt: "A house with light gray siding, with two rectangular windows on the upper floor and one on the ground floor. The house is located on a lot with tall vegetation, and a wooden deck with handrails leads to the front door. The scene is illuminated by soft light, suggesting late afternoon or early evening.",
        imgTitle: "Brick House",
    },
    {
        id: 7,
        title: "Renovated",
        imgPath: house4,
        imgAlt: "A contemporary house with a dark wood-clad facade and a pitched roof. The roof features several glass windows, providing natural light to the interior. In the background, a clear blue sky with a few clouds serves as a backdrop for the building.",
        imgTitle: "Renovated",
    },
    {
        id: 8,
        title: "Barn House",
        imgPath: house3,
        imgAlt: "Front view of a single-family home with a modern design and straight lines. The house is situated on a flat lot with tall grass and a night sky with thick clouds. Lights on in the windows create a cozy atmosphere.",
        imgTitle: "Barn House",
    },
];

export default projects;
