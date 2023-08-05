"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import {
  ArrowDownTrayIcon,
  SunIcon,
  Cog6ToothIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import DarkModeButton from "../components/DarkModeButton";
import Avatar from "../components/images/about/Avatar";
import { useTheme } from "next-themes";
import useMounted from "../lib/hooks/useMounted";

const RESUME_LINK = "/resume/chayhuixiang_resume.pdf";

const Navbar: React.FC = () => {
  const mounted = useMounted();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // sidebar
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  // dropdown
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  // hide sidebar when scrolling down
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  // hide dropdown when click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !dropdownRef.current?.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  // hide sidebar and dropdown when path changes
  useEffect(() => {
    setShowSidebar(false);
    setShowDropdown(false);
  }, [pathname]);

  return (
    <nav
      className={`shadow-lg sticky z-30 bg-white dark:bg-indigo transition-all duration-200 ${
        show ? "top-0" : "-top-28"
      }`}
    >
      <div className="w-full flex justify-between max-w-7xl py-8 lg:px-[7.5rem] sm:px-[3rem] px-4 m-auto">
        {/* Left Hero */}
        <Link href="/" className="flex gap-5 z-30">
          {/* <Avatar width={48} height={48} /> */}
          <Avatar className="w-12 h-12" />
          <div className="hidden xl:flex flex-col">
            <h3 className="font-bold">Hui Xiang</h3>
            <p className="text-xs text-zinc dark:text-zinc-200 font-secondary leading-[0.813rem]">
              Student
            </p>
          </div>
        </Link>

        {/* Middle Links */}
        <div className="hidden absolute md:flex gap-10 m-auto w-max left-0 right-0 h-12 items-center justify-center text-zinc dark:text-zinc-200 font-semibold">
          <Link
            href="/experience"
            className={`hover:text-gunmetal dark:hover:text-white ${
              pathname === "/experience" && "text-gunmetal dark:text-white"
            }`}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={`hover:text-gunmetal dark:hover:text-white ${
              pathname === "/projects" && "text-gunmetal dark:text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/achievements"
            className={`hover:text-gunmetal dark:hover:text-white ${
              pathname === "/achievements" && "text-gunmetal dark:text-white"
            }`}
          >
            Achievements
          </Link>
          <Link
            href="/contact"
            className={`hover:text-gunmetal dark:hover:text-white ${
              pathname === "/contact" && "text-gunmetal dark:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex gap-3 relative">
          {/* xl */}
          <DarkModeButton className="hidden xl:flex" />
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:block"
          >
            <Button
              onClick={() => {}}
              type="outline"
              colour="blue-dark"
              className="gap-3"
            >
              <ArrowDownTrayIcon className="w-6 h-6" />
              <p className="font-semibold">Resume</p>
            </Button>
          </a>
          {/* md */}
          <div ref={ref} className="hidden md:block peer mb-[-1rem] xl:hidden">
            <Button
              onClick={() => setShowDropdown((val) => !val)}
              type="outline"
              colour="blue-dark"
              className={`${
                showDropdown ? "bg-blue-dark/10 dark:bg-zinc-300/10" : ""
              }`}
            >
              <Cog6ToothIcon className="w-6 h-6" />
            </Button>
          </div>
          <div
            className={`${
              showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
            } peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible absolute top-14 right-0 h-[5.75rem] border-2 border-blue-dark dark:border-zinc-300 dark:text-zinc-300 rounded-lg bg-white dark:bg-indigo shadow-around-lg text-blue-dark transition-all`}
            ref={dropdownRef}
          >
            <a
              href={RESUME_LINK}
              rel="noreferrer noopener"
              target="_blank"
              className="flex h-1/2 gap-3 px-4 items-center hover:bg-blue-dark/10 dark:hover:bg-zinc-300/10 dark:hover:text-zinc-300 hover:text-gunmetal cursor-pointer"
            >
              <ArrowDownTrayIcon className="w-6 h-6" />
              <p className="font-semibold">Resume</p>
            </a>
            <div
              onClick={() =>
                mounted && currentTheme === "dark"
                  ? setTheme("light")
                  : setTheme("dark")
              }
              className="flex h-1/2 gap-3 px-4 items-center hover:bg-blue-dark/10 dark:hover:bg-zinc-300/10 hover:text-gunmetal dark:hover:text-white cursor-pointer"
            >
              {mounted && currentTheme === "dark" ? (
                <MoonIcon className="w-6 h-6" />
              ) : (
                <SunIcon className="w-6 h-6" />
              )}
              <p className="font-semibold">
                {mounted && currentTheme === "dark" ? "Light" : "Dark"}
              </p>
            </div>
          </div>
          {/* sm */}
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`block md:hidden z-30 ${
              showSidebar ? "rotate-90" : ""
            } transition-all duration-200`}
            onClick={() => setShowSidebar((val) => !val)}
            initial={false}
            animate={showSidebar ? "open" : "closed"}
          >
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              fill={mounted && currentTheme === "dark" ? "#C3B9F7" : "#3A506F"}
              variants={{
                closed: {
                  d: "M7.20001 12.0001C7.20001 10.6746 8.27453 9.6001 9.60001 9.6001H38.4C39.7255 9.6001 40.8 10.6746 40.8 12.0001C40.8 13.3256 39.7255 14.4001 38.4 14.4001H9.60001C8.27453 14.4001 7.20001 13.3256 7.20001 12.0001Z",
                },
                open: {
                  d: "M10.303 10.303C11.2403 9.36578 12.7599 9.36578 13.6972 10.303L37.6972 34.303C38.6344 35.2403 38.6344 36.7599 37.6972 37.6972C36.7599 38.6344 35.2403 38.6344 34.303 37.6972L10.303 13.6972C9.36578 12.7599 9.36578 11.2403 10.303 10.303Z",
                },
              }}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.20001 24.0001C7.20001 22.6746 8.27453 21.6001 9.60001 21.6001H38.4C39.7255 21.6001 40.8 22.6746 40.8 24.0001C40.8 25.3256 39.7255 26.4001 38.4 26.4001H9.60001C8.27453 26.4001 7.20001 25.3256 7.20001 24.0001Z"
              fill={mounted && currentTheme === "dark" ? "#C3B9F7" : "#3A506F"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              fill={mounted && currentTheme === "dark" ? "#C3B9F7" : "#3A506F"}
              variants={{
                closed: {
                  d: "M7.20001 36.0001C7.20001 34.6746 8.27453 33.6001 9.60001 33.6001H38.4C39.7255 33.6001 40.8 34.6746 40.8 36.0001C40.8 37.3256 39.7255 38.4001 38.4 38.4001H9.60001C8.27453 38.4001 7.20001 37.3256 7.20001 36.0001Z",
                },
                open: {
                  d: "M34.303 10.303C35.2403 9.36578 36.7599 9.36578 37.6972 10.303C38.6344 11.2403 38.6344 12.7599 37.6972 13.6972L13.6972 37.6972C12.7599 38.6344 11.2403 38.6344 10.303 37.6972C9.36578 36.7599 9.36578 35.2403 10.303 34.303L34.303 10.303Z",
                },
              }}
            />
          </motion.svg>

          {/* <img src='/images/header/menu.svg' className='block md:hidden z-30' onClick={() => setShowSidebar((val) => !val)}/> */}

          {/* sidebar-filter */}
          <div
            className={`fixed w-screen h-[100vh] bg-white dark:bg-indigo left-0 top-0 z-10 transition-all duration-500 ${
              showSidebar ? "opacity-80 visible" : "opacity-0 invisible"
            }`}
          />

          {/* sidebar */}
          <div
            className={`fixed h-[100vh] w-[min(75vw,400px)] bg-zinc-100 dark:bg-purple-dark top-0 right-0 z-20 transition-all duration-500 shadow-lg ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            } flex flex-col pt-8 items-center gap-12`}
          >
            <DarkModeButton />
            <div className="flex flex-col items-center gap-10 font-semibold text-zinc dark:text-zinc-200">
              <Link
                href="/experience"
                className={`${
                  pathname === "/experience" && "text-gunmetal dark:text-white"
                }`}
              >
                <h4>Experience</h4>
              </Link>
              <Link
                href="/projects"
                className={`${
                  pathname === "/projects" && "text-gunmetal dark:text-white"
                }`}
              >
                <h4>Projects</h4>
              </Link>
              <Link
                href="/achievements"
                className={`${
                  pathname === "/achievements" &&
                  "text-gunmetal dark:text-white"
                }`}
              >
                <h4>Achievements</h4>
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" && "text-gunmetal dark:text-white"
                }`}
              >
                <h4>Contact</h4>
              </Link>
            </div>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                onClick={() => {}}
                type="outline"
                colour="blue-dark"
                className="gap-3"
              >
                <ArrowDownTrayIcon className="w-6 h-6" />
                <p className="font-semibold">Resume</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
