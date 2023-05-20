import React from "react";

const AboutMe = () => {
  return (
    <>
      <section className='pb-40 bg-primary-bg min-h-screen flex justify-center items-start'>
        <div className='relative px-12 flex flex-col my-auto'>
          <h1 className='text-7xl'>Ethan Perry</h1>
          <h1 className='text-5xl mt-4'>
            I am an aspiring <span>thoosie</span> professional.
          </h1>
          <h3 className='text-lg mt-8'>
            I use my mechanical engineer tings, big brain, and Durpue education
            to make cool stuff
          </h3>
          <button className='mt-4 w-fit bg-transparent hover:bg-primary-accent/25 transition-all duration-150 px-6 py-3 text-primary-accent font-semibold rounded-md border-primary-accent border'>
            Contact Me
          </button>
        </div>
        {/* <!-- graphic here --> */}
      </section>
    </>
  );
};

export default AboutMe;
