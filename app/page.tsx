"use client";

import Image from "next/image";
import { useRef } from "react";
import Header from "@/app/components/Header";
import Project from "@/app/components/Project";
import H2 from "@/app/components/H2";
import Person from "@/app/components/Person";
import Footer from "@/app/components/Footer";
import Input from "@/app/components/Input";
import Section from "@/app/components/Section";
import List from "@/app/components/List";
import Logo from "@/app/components/Logo";
import people from "@/app/utils/mock/people";
import projects from "@/app/utils/mock/projects";
import architect from "@/public/architect.jpg";
import map from "@/public/map.jpg";
import SubmitButton from "@/app/components/SubmitButton";

const Home = () => {
  const projectsRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <Header
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <main className="mt-[60px] flex flex-col gap-y-8 pb-4 mx-auto max-w-[1536px] min-w-[320px]">
        <div className="relative">
          <Image
            src={architect}
            alt="Building seen from below with blue sky and clouds."
            className="w-full"
          />
          <Logo />
        </div>
        <Section ref={projectsRef}>
          <H2>Projects</H2>
          <List>
            {projects?.length ? (
              projects?.map(({ id, projectTitle, img }) => (
                <Project key={id} projectTitle={projectTitle} img={img} />
              ))
            ) : (
              <li className="text-xl">Sem projetos para exibir</li>
            )}
          </List>
        </Section>
        <Section ref={aboutRef}>
          <H2>About</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <List>
            {people?.length ? (
              people?.map(({ id, name, position, description, img }) => (
                <Person
                  key={id}
                  name={name}
                  position={position}
                  description={description}
                  img={img}
                />
              ))
            ) : (
              <li className="text-xl">Sem pessoas para exibir</li>
            )}
          </List>
        </Section>
        <Section ref={contactRef}>
          <H2>Contact</H2>
          <form className="flex flex-col gap-y-4">
            <p>Lets get in touch and talk about your next project.</p>
            <Input
              type="text"
              required={true}
              placeholder="Name"
              ariaLabelText="Name"
            />
            <Input
              type="email"
              required={true}
              placeholder="Email"
              ariaLabelText="Email"
            />
            <Input
              type="text"
              required={true}
              placeholder="Subject"
              ariaLabelText="Subject"
            />
            <Input
              type="text"
              required={true}
              placeholder="Comment"
              ariaLabelText="Comment"
            />
            <SubmitButton>Send message</SubmitButton>
          </form>
        </Section>
        <Section>
          <Image src={map} alt="" className="w-full" />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
