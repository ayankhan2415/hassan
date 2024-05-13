import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-primary sm:p-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; {currentYear} {" "}
          <Link href="/" className="hover:underline">
            Hassan Muawiya
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            href="https://www.facebook.com/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
          >
            <BsFacebook size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
          >
            <AiFillLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
          >
            <AiFillGithub size={24} />
          </Link>
          <Link
            href="https://wa.me/+923231426046"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
          >
            <AiOutlineWhatsApp size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/@certifiedpro1"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
          >
            <AiFillYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
