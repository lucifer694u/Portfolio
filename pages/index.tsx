import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

import { GetStaticProps } from "next";
import { Project, Skill, Social } from "@/typings";

import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchScocial } from "@/utils/fetchSocials";

type Props = {
  skills: Skill[];
  projects: Project[];

};

export default function Home({ skills, projects}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Himanshu.dev</title>
      </Head>
      {/* <Header socials={socials} /> */}
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* 
      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
          className="h-5 w-5 rounded-full filter grayscale hover:grayscale-0 cursror-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXVvtErip-C4ERoelE0BswvyYrJ_d1ZzukA&usqp=CAU" alt="" />
        </div>
      </footer>
      </Link> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchScocial();

  return {
    props: {
      skills,
      projects,
    
    },
    revalidate: 10,
  };
};
