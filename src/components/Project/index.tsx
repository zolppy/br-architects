interface IProject {
    title: string;
    imgPath: string;
}

const Project = ({ title, imgPath }: IProject) => {
    return (
        <li className="relative">
            <div className="absolute bg-black text-white p-2">
                <h3>{title}</h3>
            </div>
            <img src={imgPath} alt="" loading="lazy" />
        </li>
    );
};

export default Project;
