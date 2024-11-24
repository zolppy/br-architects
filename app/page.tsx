import Image from "next/image";
import Header from "@/app/components/Header";
import Project from "@/app/components/Project";
import H2 from "@/app/components/H2";
import People from "@/app/components/People";
import { people, projects } from "@/app/mock";
import architect from "@/public/architect.jpg";
import map from "@/public/map.jpg";

const Home = () => {
    return (
        <>
            <Header />
            <main className="mt-[60px] flex flex-col gap-y-8 pb-4">
                <div className="relative">
                    <Image src={architect} alt="" loading="lazy" />
                    <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl items-center gap-x-4 md:flex">
                        <span className="font-bold  bg-black opacity-80 p-4">
                            BR
                        </span>
                        <span className="hidden md:block">Architects</span>
                    </div>
                </div>
                <section className="px-5 flex flex-col gap-y-8">
                    <H2>Projects</H2>
                    <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {projects?.length ? (
                            projects?.map(({ id, title, imgPath }) => (
                                <Project
                                    key={id}
                                    title={title}
                                    imgPath={imgPath}
                                />
                            ))
                        ) : (
                            <li className="text-xl">
                                Sem projetos para exibir
                            </li>
                        )}
                    </ul>
                </section>
                <section className="px-5 flex flex-col gap-y-8">
                    <H2>About</H2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <ul className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {people?.length ? (
                            people?.map(
                                ({
                                    id,
                                    name,
                                    position,
                                    description,
                                    imgPath,
                                }) => (
                                    <People
                                        key={id}
                                        name={name}
                                        position={position}
                                        description={description}
                                        imgPath={imgPath}
                                    />
                                )
                            )
                        ) : (
                            <li className="text-xl">Sem pessoas para exibir</li>
                        )}
                    </ul>
                </section>
                <section className="px-5 flex flex-col gap-y-8">
                    <H2>Contact</H2>
                    <form className="flex flex-col gap-y-4">
                        <p>
                            Lets get in touch and talk about your next project.
                        </p>
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            className="border p-2"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Subject"
                            className="border p-2"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Comment"
                            className="border p-2"
                        />
                        <button
                            type="submit"
                            className="uppercase bg-black text-white py-2 px-5 w-fit hover:bg-gray-500"
                        >
                            Send message
                        </button>
                    </form>
                </section>
                <section className="px-5">
                    <Image src={map} alt="" loading="lazy" />
                </section>
            </main>
            <footer className="bg-black text-white p-7 text-center">
                Powered by{" "}
                <a
                    href="https://github.com/zolppy"
                    target="_blank"
                    className="underline"
                >
                    Zolppy
                </a>
            </footer>
        </>
    );
};

export default Home;
