import React from "react";

const AboutMe = () => {
  return (
    <section className='pb-40 min-h-screen bg-primary-bg flex justify-center items-start'>
      <div className='px-12 flex flex-col items-center my-44 md:my-auto text-center custom-gradient-glow isolate relative'>
        <h1 className='text-7xl'>Ethan Perry</h1>
        <h1 className='text-5xl mt-4'>
          I am an aspiring <span>thoosie</span> professional.
        </h1>
        <h3 className='text-lg mt-8'>
          I use my mechanical engineer tings, big brain, and Durpue education to
          make cool stuff
        </h3>
        <button className='mt-16 w-fit bg-transparent hover:bg-primary-accent/25 transition-all duration-150 px-24 py-6 text-primary-accent font-semibold rounded-md border-primary-accent border relative mb-16 text-lg'>
          Contact Me
        </button>
      </div>
      {/* <!-- graphic here --> */}
      {/* <div className='absolute h-full w-full flex custom-gradient-glow py-72 overflow-hidden'></div> */}
    </section>
  );
};

export default AboutMe;
