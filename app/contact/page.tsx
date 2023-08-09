"use client";

import React, { useRef, useState, ReactNode } from "react";
import Button from "@/components/Button";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import Linkedin from "@/components/images/footer/Linkedin";
import Github from "@/components/images/footer/Github";
import emailjs from "@emailjs/browser";
import Spinner from "@/components/images/contact/Spinner";
import Done from "@/components/images/contact/Done";
import ErrorComponent from "@/components/images/contact/ContactError";
import ContactError from "@/lib/utils/ContactError";
import { useReCaptcha } from "next-recaptcha-v3";
import submitRecaptcha from "@/lib/utils/submitRecaptcha";

type statusId = "sending" | "error" | "sent" | "idle";
type status = {
  id: statusId;
  content: ReactNode;
  target: string[] | null;
};

const statuses: status[] = [
  {
    id: "idle",
    content: "Submit",
    target: null,
  },
  {
    id: "sending",
    content: <Spinner />,
    target: null,
  },
  {
    id: "error",
    content: "",
    target: null,
  },
  {
    id: "sent",
    content: <Done />,
    target: null,
  },
];

const getStatus = (id: statusId) => {
  const status = statuses.find((status) => status.id === id);
  return status === undefined ? statuses[0] : status;
};

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<status>(getStatus("idle"));
  const { executeRecaptcha } = useReCaptcha();

  const ref = useRef<HTMLFormElement>(null);

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(getStatus("idle"));
    setName(e.target.value);
  };

  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(getStatus("idle"));
    setEmail(e.target.value);
  };

  const themeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(getStatus("idle"));
    setTheme(e.target.value);
  };

  const messageInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStatus(getStatus("idle"));
    setMessage(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    setStatus(getStatus("sending"));

    try {
      if (name === "") {
        throw new ContactError("Please fill in your name", ["name"]);
      } else if (email === "") {
        throw new ContactError("Please fill in your email", ["email"]);
      } else if (theme === "") {
        throw new ContactError("Please fill in the subject", ["theme"]);
      } else if (message === "") {
        throw new ContactError("Please fill in your message", ["message"]);
      }

      if (
        serviceId &&
        templateId &&
        publicKey &&
        ref.current &&
        executeRecaptcha
      ) {
        const response = await fetch("/limiter");
        if (!response.ok) {
          throw new ContactError("You have sent too many requests", ["submit"]);
        }

        const gReCaptchaToken = await executeRecaptcha("contact");
        await submitRecaptcha(gReCaptchaToken, name, email, message, theme);

        await emailjs.sendForm(serviceId, templateId, ref.current, publicKey);

        setName("");
        setEmail("");
        setTheme("");
        setMessage("");
        setStatus(getStatus("sent"));
      } else {
        throw new Error("Oops. Something went wrong.");
      }
    } catch (error: unknown) {
      const status = getStatus("error");
      if (typeof error === "string") {
        status.content = <ErrorComponent message={error} />;
      } else if (error instanceof ContactError) {
        status.content = <ErrorComponent message={error.message} />;
        status.target = error.target;
      } else if (error instanceof Error) {
        status.content = <ErrorComponent message={error.message} />;
      }
      setStatus(status);
    }
  };
  return (
    <main className='min-h-screen md:min-h-0 md:h-screen bg-white dark:bg-indigo overflow-hidden md:bg-[url("/images/contact/contact-cover.svg")] bg-no-repeat bg-[left_-15rem_top_-7rem] flex flex-col justify-center items-center py-6 px-4 sm:px-[3rem] lg:px-[7.5rem]'>
      <h1 className="text-4xl sm:text-[2.5rem]">Contact</h1>
      <p className="md:mt-3 mb-6 md:mb-[1.875rem] text-sm sm:text-base">
        <span className="hidden sm:inline-block">I’m happy</span>
        <span className="sm:hidden">Happy</span> to hear from you! Let’s get in
        touch!
      </p>
      <form
        className="grid grid-cols-2 gap-3 max-w-[20.75rem] w-full text-purple font-bold dark:text-purple-light"
        ref={ref}
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className={`bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light ${
            status.target?.includes("name") && "outline-red-500"
          }`}
          name="text_Name"
          placeholder="Name"
          value={name}
          onChange={nameInputHandler}
        />
        <input
          type="email"
          className={`bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light ${
            status.target?.includes("email") && "outline-red-500"
          }`}
          name="text_Email"
          placeholder="Email"
          value={email}
          onChange={emailInputHandler}
        />
        <input
          type="text"
          className={`col-span-2 bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light ${
            status.target?.includes("theme") && "outline-red-500"
          }`}
          name="text_Theme"
          placeholder="Subject"
          value={theme}
          onChange={themeInputHandler}
        />
        <textarea
          rows={5}
          className={`col-span-2 bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none resize-none dark:placeholder-purple-light ${
            status.target?.includes("message") && "outline-red-500"
          }`}
          name="text_Message"
          placeholder="Message"
          value={message}
          onChange={messageInputHandler}
        />
        <Button
          className="shadow-lg h-[2.625rem] col-span-2 justify-center"
          disabled={status.target?.includes("submit")}
          type="solid"
          colour="purple"
          onClick={() => ref.current?.dispatchEvent(new Event("submit"))}
        >
          {typeof status.content === "string" ? (
            <p className="font-bold m-auto text-sm sm:text-base">
              {status.content}
            </p>
          ) : (
            status.content
          )}
        </Button>
      </form>
      <div className="mt-4 md:mt-6 flex gap-8">
        <a
          href="https://www.linkedin.com/in/hui-xiang/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* <img src={`/images/footer/linkedin${ linkedinHovered ? '-hover' : '' }.svg`} alt='linkedin' className='h-6 w-6 md:h-8 md:w-8' /> */}
          <Linkedin />
        </a>
        <a
          href="https://github.com/chayhuixiang/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {/* <img src={`/images/footer/github${ githubHovered ? '-hover' : '' }.svg`} alt='github' className='h-6 w-6 md:h-8 md:w-8' /> */}
          <Github />
        </a>
        <a
          href="mailto:chayhuixiang@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-full h-8 w-8 flex items-center justify-center bg-zinc hover:bg-zinc/90 dark:bg-zinc-200 dark:hover:bg-zinc-200/90"
        >
          <EnvelopeOpenIcon className="w-5 h-5 text-white stroke-2 dark:text-indigo" />
        </a>
      </div>
    </main>
  );
};

export default Contact;
