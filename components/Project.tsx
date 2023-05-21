import React from "react";
import Image from "next/image";
import Link from "next/link";
import GhostButton from "./GhostButton";
import CTAButton from "./CTAButton";

type ProjectProps = {
  title: string;
  description: string;
  tools: string[];
  CTAtext: string;
};

const Project = ({ title, description, tools, CTAtext }: ProjectProps) => {
  return (
    <div className='mx-8 sm:mx-16 md:mx-24'>
      <div className='py-12 grid grid-cols-12 max-w-screen-lg lg:mx-auto'>
        <Link
          href='https://www.google.com'
          target='blank'
          className='col-[1/-1] md:col-[1/8] row-[1/2] bg-primary-accent/40 md:bg-primary-accent h-full md:h-5/6 self-center rounded-md shadow-md md:hover:bg-primary-accent/70 transition-colors duration-300 hover:cursor-pointer'
        ></Link>
        <div className='col-[2/12] md:col-[5/-1] row-[1/2] h-fit self-center text-left md:text-right'>
          <h2 className='text-2xl font-extrabold my-4'>{title}</h2>
          <p className='py-6 px-8 md:pl-16 my-4 bg-secondary-bg rounded-md shadow-md '>
            {description}
          </p>
          <ul className='flex gap-6 md:justify-end font-light my-4'>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <GhostButton
            text={CTAtext}
            secondaryColor={true}
            className='mb-4 shadow-md w-full md:w-fit'
          />
        </div>
      </div>
    </div>
    // <div className='bg-primary-bg'>
    //   <div className='mx-8 sm:mx-16 md:mx-24'>
    //     <div className='py-12 grid grid-cols-12 max-w-screen-lg lg:mx-auto'>
    //       <Link
    //         href='https://www.google.com'
    //         target='blank'
    //         className='col-[1/-1] md:col-[1/8] row-[1/2] bg-primary-accent/40 md:bg-primary-accent h-full md:h-5/6 self-center rounded-md shadow-md hover:bg-primary-accent/70 transition-colors duration-300 hover:cursor-pointer'
    //       ></Link>
    //       <div className='col-[2/12] md:col-[5/-1] row-[1/2] h-fit self-center text-left md:text-right'>
    //         <h2 className='text-2xl font-extrabold my-4'>Animatronic Name</h2>
    //         <p className='py-6 px-8 md:pl-16 my-4 bg-secondary-bg rounded-md shadow-md '>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
    //           corporis! Sint quo dolore, nam libero accusantium unde possimus
    //           velit natus asperiores, totam expedita nostrum, officia dolores
    //           hic molestiae perferendis cumque?
    //         </p>
    //         <ul className='flex gap-6 md:justify-end font-light my-4'>
    //           <li>AutoCAD</li>
    //           <li>Tool #2</li>
    //           <li>Tool #3</li>
    //         </ul>
    //         <GhostButton
    //           text='Check it out'
    //           secondaryColor={true}
    //           className='mb-4 shadow-md w-full md:w-fit'
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Project;
