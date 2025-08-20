import Image from "next/image";
import type IProject from "@/app/utils/interfaces/project";

const Project = ({ projectTitle, img }: Omit<IProject, "id">) => {
  const { src, alt, title } = img;
  return (
    <li className="relative">
      <div className="absolute bg-black text-white p-2">
        <h3>{projectTitle}</h3>
      </div>
      <Image src={src} alt={alt} title={title} className="w-full" />
    </li>
  );
};

export default Project;
