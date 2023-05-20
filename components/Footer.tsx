import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className='bg-secondary-bg py-16'>
        <ul className='flex w-full gap-2 justify-center'>
          <li>
            <Link
              href='https://www.linkedin.com/in/ethanperry317/'
              target='blank'
            >
              <Image
                src='../../assets/socials/linkedin.svg'
                alt=''
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/4072coasters/' target='blank'>
              <Image
                src='../../assets/socials/instagram.svg'
                alt=''
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href='mailto:eperry2658@gmail.com'>
              <Image
                src='../../assets/socials/email.svg'
                alt=''
                width={50}
                height={50}
              />
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
