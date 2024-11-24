import Image from "next/image";
import Header from "@/app/components/Header";
import Project from "@/app/components/Project";
import H2 from "@/app/components/H2";
import People from "@/app/components/People";
import Footer from "@/app/components/Footer";
import Input from "@/app/components/Input";
import Section from "@/app/components/Section";
import List from "@/app/components/List";
import Logo from "@/app/components/Logo";
import { people, projects } from "@/app/mock";
import architect from "@/public/architect.jpg";
import map from "@/public/map.jpg";
import SubmitButton from "./components/SubmitButton";

const Home = () => {
    return (
        <>
            <Header />
            <main className="mt-[60px] flex flex-col gap-y-8 pb-4 mx-auto max-w-[1800px] min-w-[320px]">
                <div className="relative">
                    <Image
                        src={architect}
                        alt=""
                        loading="lazy"
                        className="w-full"
                    />
                    <Logo />
                </div>
                <Section>
                    <H2>Projects</H2>
                    <List>
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
                    </List>
                </Section>
                <Section>
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
                    <List>
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
                    </List>
                </Section>
                <Section>
                    <H2>Contact</H2>
                    <form className="flex flex-col gap-y-4">
                        <p>
                            Lets get in touch and talk about your next project.
                        </p>
                        <Input type="text" required={true} placeholder="Name" />
                        <Input
                            type="email"
                            required={true}
                            placeholder="Email"
                        />
                        <Input
                            type="text"
                            required={true}
                            placeholder="Subject"
                        />
                        <Input
                            type="text"
                            required={true}
                            placeholder="Comment"
                        />
                        <SubmitButton>Send message</SubmitButton>
                    </form>
                </Section>
                <Section>
                    <Image src={map} alt="" loading="lazy" className="w-full" />
                </Section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
