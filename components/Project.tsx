import React from "react";
import Image from "next/image";
import Link from "next/link";
import GhostButton from "./GhostButton";
import CTAButton from "./CTAButton";
import { Url } from "url";

type ProjectProps = {
  title: string;
  description: string;
  tools: string[];
  CTAtext: string;
  rightAligned?: boolean;
  className?: string;
};

const Project = ({
  title,
  description,
  tools,
  CTAtext,
  rightAligned = false,
  className,
}: ProjectProps) => {
  const outerStyling = className;

  return rightAligned ? (
    <div className={`mx-8 sm:mx-16 md:mx-24 ${outerStyling}`}>
      <div className='grid grid-cols-12 max-w-screen-lg lg:mx-auto'>
        <Link
          href='https://www.google.com'
          target='blank'
          className='col-[1/-1] md:col-[1/8] row-[1/2] bg-primary-accent/40 md:bg-primary-accent h-full md:h-5/6 self-center rounded-md shadow-md md:hover:bg-primary-accent/70 transition-colors duration-300 hover:cursor-pointer relative z-10'
        ></Link>
        <div className='col-[2/12] md:col-[5/-1] row-[1/2] h-fit self-center text-left md:text-right'>
          <h2 className='relative z-10 text-2xl font-extrabold my-4 w-fit mr-auto md:mr-0 md:ml-auto'>
            {title}
          </h2>
          <p className='relative z-10 py-6 px-8 md:pl-16 my-4 bg-secondary-bg rounded-md shadow-md hover:shadow-lg hover:shadow-black/40 transition-all duration-300'>
            {description}
          </p>
          <ul className='relative z-10 w-fit flex flex-wrap gap-6 md:justify-end font-light my-4 mr-auto md:mr-0 md:ml-auto'>
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
  ) : (
    <div className={`mx-8 sm:mx-16 md:mx-24 ${outerStyling}`}>
      <div className='grid grid-cols-12 max-w-screen-lg lg:mx-auto'>
        <Link
          href='https://www.google.com'
          target='blank'
          className='col-[1/-1] md:col-[6/-1] row-[1/2] bg-primary-accent/40 md:bg-primary-accent h-full md:h-5/6 self-center rounded-md shadow-md md:hover:bg-primary-accent/70 transition-colors duration-300 hover:cursor-pointer relative z-10'
        ></Link>
        <div className='col-[2/12] md:col-[1/9] row-[1/2] h-fit self-center text-left'>
          <h2 className='relative z-10 text-2xl font-extrabold my-4 w-fit mr-auto'>
            {title}
          </h2>
          <p className='relative z-10 py-6 px-8 md:pr-16 my-4 bg-secondary-bg rounded-md shadow-md hover:shadow-lg hover:shadow-black/40 transition-all duration-300'>
            {description}
          </p>
          <ul className='relative z-10 w-fit flex flex-wrap gap-6 md:justify-start font-light my-4 mr-auto'>
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
  );
};

export default Project;
