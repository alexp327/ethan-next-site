import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className='bg-slate-300 py-16'>
        <ul className='flex w-full gap-2 justify-center'>
          <li>
            <Image
              src='../../assets/linkedin.svg'
              alt=''
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image
              src='../../assets/instagram.svg'
              alt=''
              width={50}
              height={50}
            />
          </li>
          <li>
            <Image src='../../assets/email.svg' alt='' width={50} height={50} />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
