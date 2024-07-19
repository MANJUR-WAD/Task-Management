import React from "react";
import right_bg from "../assets/2131038.jpg";
import { Button } from "@/components/ui/button";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const FrontPage = () => {
  return (
    <section className="frontpage h-screen">
      <header className="bg-black p-3 font-roboto text-white font-semibold">
        <marquee behavior="scroll" direction="left">
          ** TO EDIT YOUR TASK AND SAVE IT PERMANENTLY , FIRST YOU SHOULD{" "}
          <span className="text-green-500">SIGN UP </span>
          WITH YOUR EMAIL ID OR PHONE NUMBER AND{" "}
          <span className="text-orange-500">LOGGED IN</span> AND THEN TRACK YOUR
          TASKS **
        </marquee>
      </header>
      <div className="sign-up-and-login-btns font-roboto text-white float-right m-4">
        <Link
          to="/signUp"
          className="bg-blue-600 rounded-md px-3 py-2 text-1xl hover:bg-black hover:text-white me-1"
        >
          SIGN UP
        </Link>
        <Link
          to="/logIn"
          className="bg-slate-500 rounded-md px-3 py-2 text-1xl hover:bg-black hover:text-white me-1"
        >
          LOG IN
        </Link>
      </div>
      <div className="grid grid-cols-1 items-end h-1/2 w-full container mb-10 md:grid-cols-2">
        <div className="left-bg font-marhey text-[6vmin]  font-extrabold text-center">
          TASK MANAGEMENT
        </div>
        <div className="right-bg">
          <img src={right_bg} alt="image" />
        </div>
      </div>

      <div className="text-center mt-10">
        <Button
          variant="outline"
          className="bg-blue-600 text-white text-1xl hover:bg-black hover:text-white font-roboto p-5"
        >
          <MdFormatListBulletedAdd className="me-2" />
          LIST DOWN YOUR TASKS
        </Button>
      </div>
    </section>
  );
};

export default FrontPage;
