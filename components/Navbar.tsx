import React from 'react';
import GhostButton from './GhostButton';

const Navbar = () => {
  return (
    <header className='fixed z-50 w-full py-4 px-8 bg-primary-bg/90 shadow-md shadow-black/30 backdrop-blur-md text-primary-text'>
      <div className='flex items-center'>
        <svg
          className='fill-primary-accent'
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
        >
          <path d='M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' />
        </svg>
        <h1 className='px-4 min-w-fit my-auto'>Ethan Perry</h1>
        <nav className='w-full my-auto'>
          <ul className='flex justify-end'>
            <li>
              <a
                href='#what-i-do'
                className='flex items-center hover:text-primary-accent px-3 py-4'
              >
                What I Do
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='flex items-center hover:text-primary-accent px-3 py-4'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className='flex items-center hover:text-primary-accent px-3 py-4'
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='flex items-center hover:text-primary-accent px-3 py-4'
              >
                Resume
              </a>
            </li>
            <li>
              <GhostButton
                text='Contact'
                secondaryColor={true}
                className='ml-3'
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

