import AboutMe from "@/components/AboutMe";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import Skills from "@/components/Skills";
import TextButton from "@/components/TextButton";
import WhatIDo from "@/components/WhatIDo";
import Image from "next/image";

export default function Home() {
  return (
    <main className='bg-secondary-bg text-slate-200 font-semibold'>
      <AboutMe />
      <WhatIDo />
      <Skills />
      <div className='px-4 min-h-screen flex flex-col bg-primary-text'>
        <CTAButton
          className='mt-4'
          text={"Primary CTA"}
          secondaryColor={false}
        />
        <CTAButton
          className='mt-4'
          text={"Secondary CTA"}
          secondaryColor={true}
        />
        <GhostButton
          className='mt-4'
          text={"Primary Ghost"}
          secondaryColor={false}
        />
        <GhostButton
          className='mt-4'
          text={"Secondary Ghost"}
          secondaryColor={true}
        />
        <TextButton
          className='mt-4'
          text={"Primary Text"}
          secondaryColor={false}
        />
        <TextButton
          className='mt-4'
          text={"Secondary Text"}
          secondaryColor={true}
        />
        <TextButton
          href={"/"}
          className='mt-4'
          text={"Primary Text Link Button"}
          secondaryColor={false}
        />
      </div>
    </main>
  );
}
