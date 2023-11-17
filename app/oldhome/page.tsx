import AboutMe from "@/components/AboutMe";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import TextButton from "@/components/TextButton";
import WhatIDo from "@/components/WhatIDo";
import Image from "next/image";

export default function Home() {
  return (
    <main className='bg-secondary-bg text-slate-200 font-semibold'>
      <AboutMe />
      <WhatIDo />
      <section
        id='projects'
        tabIndex={-1}
        className='bg-primary-bg text-center'
      >
        <h2 className='pt-16 text-center text-5xl'>My Projects</h2>
        {/* <p className='pt-4 text-center text-lg hover:underline w-fit mx-auto'>
          <a href=''>Check out the full list &rarr;</a>
        </p> */}
        <Project
          title={"Animatronic Name"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corporis! Sint quo dolore, nam libero accusantium unde possimus velit natus asperiores, totam expedita nostrum, officia dolores hic molestiae perferendis cumque?"
          }
          tools={["AutoCAD", "Tool #2", "Tool #3"]}
          CTAtext={"Check it out"}
          rightAligned={true}
          className='py-12 lg:py-24'
        />
        <Project
          title={"Animatronic Name"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corporis! Sint quo dolore, nam libero accusantium unde possimus velit natus asperiores, totam expedita nostrum, officia dolores hic molestiae perferendis cumque?"
          }
          tools={["AutoCAD", "Tool #2", "Tool #3"]}
          CTAtext={"Check it out"}
          className='py-12 lg:py-24'
        />
        <Project
          title={"Animatronic Name"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corporis! Sint quo dolore, nam libero accusantium unde possimus velit natus asperiores, totam expedita nostrum, officia dolores hic molestiae perferendis cumque?"
          }
          tools={["AutoCAD", "Tool #2", "Tool #3"]}
          CTAtext={"Check it out"}
          rightAligned={true}
          className='py-12 lg:py-24'
        />
      </section>
      <Skills />
    </main>
  );
}
