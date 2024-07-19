import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TiUserAdd } from "react-icons/ti";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  return (
    <section className="signup-login-wrapper font-roboto m-5 grid content-center">
      <div className="border signup md:mx-auto sm:w-full md:w-1/2 rounded-xl overflow-hidden">
        <h1 className="text-2xl p-4 font-bold text-center text-white bg-black">
          <TiUserAdd className="me-2 inline" />
          SIGN UP
        </h1>
        <form action="#" className="p-4 bg-white">
          {/* USERNAME */}
          <Label htmlFor="email" className="block mb-2">
            YOUR EMAIL ID
          </Label>
          <Input
            type="email"
            placeholder="Email"
            className="block mb-3 w-full"
          />
          {/* ENTER PASSWORD */}
          <Label htmlFor="email" className="block mb-2">
            YOUR PASSWORD
          </Label>
          <Input
            type="text"
            placeholder="Enter Password"
            className="block mb-3 w-full"
          />
          {/* CONFIRM PASSWORD */}
          <Label htmlFor="email" className="block mb-2">
            CONFIRM PASSWORD
          </Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            className="block mb-3 w-full"
          />
          <div className="text-center">
            <Button
              variant="outline"
              className="bg-blue-800 mt-5 text-white text-1xl hover:bg-black hover:text-white font-roboto p-5 w-full"
            >
              CREATE ACCOUNT
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
