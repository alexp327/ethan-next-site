import React from "react";

const Navbar = () => {
  return (
    <>
      <header className='fixed w-full py-4 px-8 bg-tan shadow-2xl shadow-gray-700'>
        <div className='flex'>
          <svg
            className='material-icons'
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
          >
            <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' />
          </svg>
          <h1 className='px-4 min-w-fit my-auto'>Ethan's Personal Website</h1>
          <nav className='w-full my-auto'>
            <ul className='flex gap-4 justify-end'>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/about'>Experience</a>
              </li>
              <li>
                <a href='/about'>Contact</a>
              </li>
              <li>
                <a href='/about'>Resume</a>
              </li>
              <li>
                <a className='mt-4 w-fit cursor-pointer bg-transparent hover:bg-indigo-950/25 transition-all duration-150 px-6 py-3 text-indigo-950 font-semibold rounded-md border-indigo-950 border'>
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
