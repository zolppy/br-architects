import type IProject from "@/app/utils/interfaces/project";
import house1 from "@/public/houses/house1.jpg";
import house2 from "@/public/houses/house2.jpg";
import house3 from "@/public/houses/house3.jpg";
import house4 from "@/public/houses/house4.jpg";

const projects: IProject[] = [
  {
    id: 1,
    projectTitle: "Summer House",
    img: {
      src: house1,
      alt: "A house with light gray siding, with two rectangular windows on the upper floor and one on the ground floor. The house is located on a lot with tall vegetation, and a wooden deck with handrails leads to the front door. The scene is illuminated by soft light, suggesting late afternoon or early evening.",
      title: "Summer House",
    },
  },
  {
    id: 2,
    projectTitle: "Brick House",
    img: {
      src: house2,
      alt: "A row of brick houses with black roofs, two chimneys and rectangular windows. The houses have a symmetrical design and are separated by a small garden. The street in front of the houses is paved and there is a lamppost next to it.",
      title: "Brick House",
    },
  },
  {
    id: 3,
    projectTitle: "Renovated",
    img: {
      src: house3,
      alt: "Front view of a single-family home with a modern design and straight lines. The house is situated on a flat lot with tall grass and a night sky with thick clouds. Lights on in the windows create a cozy atmosphere.",
      title: "Renovated",
    },
  },
  {
    id: 4,
    projectTitle: "Barn House",
    img: {
      src: house4,
      alt: "A contemporary house with a dark wood-clad facade and a pitched roof. The roof features several glass windows, providing natural light to the interior. In the background, a clear blue sky with a few clouds serves as a backdrop for the building.",
      title: "Barn House",
    },
  },
  {
    id: 5,
    projectTitle: "Summer House",
    img: {
      src: house2,

      alt: "A row of brick houses with black roofs, two chimneys and rectangular windows. The houses have a symmetrical design and are separated by a small garden. The street in front of the houses is paved and there is a lamppost next to it.",
      title: "Summer House",
    },
  },
  {
    id: 6,
    projectTitle: "Brick House",
    img: {
      src: house1,
      alt: "A house with light gray siding, with two rectangular windows on the upper floor and one on the ground floor. The house is located on a lot with tall vegetation, and a wooden deck with handrails leads to the front door. The scene is illuminated by soft light, suggesting late afternoon or early evening.",
      title: "Brick House",
    },
  },
  {
    id: 7,
    projectTitle: "Renovated",
    img: {
      src: house4,
      alt: "A contemporary house with a dark wood-clad facade and a pitched roof. The roof features several glass windows, providing natural light to the interior. In the background, a clear blue sky with a few clouds serves as a backdrop for the building.",
      title: "Renovated",
    },
  },
  {
    id: 8,
    projectTitle: "Barn House",
    img: {
      src: house3,
      alt: "Front view of a single-family home with a modern design and straight lines. The house is situated on a flat lot with tall grass and a night sky with thick clouds. Lights on in the windows create a cozy atmosphere.",
      title: "Barn House",
    },
  },
];

export default projects;
