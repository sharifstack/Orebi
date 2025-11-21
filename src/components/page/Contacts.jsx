import React from "react";
import Bredcumb from "../layout/Bredcumb";
import Container from "../layout/Container";
import Headertext from "../layout/Headertext";
import Input from "../layout/Input";
import Button from "../layout/Button";

const Contacts = () => {
  return (
    <div className="my-32">
      <Container>
        <Bredcumb />

        <div>
          <Headertext className="w-full mb-12" Headertext="Fill up a Form" />
          <div className="flex flex-col gap-6">
            <Input
              className="w-[779px]"
              LabelText="Name"
              type="text"
              placeholder="Your name here"
              id="FirstName"
            ></Input>

            <Input
              className="w-[779px]"
              LabelText="Email"
              type="text"
              placeholder="Your email here"
              id="Email"
            ></Input>

            <div className="commentBox">
              <label htmlFor="message" className="block font-bold pb-4">
                Message
              </label>
              <textarea
                id="message"
                className=" border-b sm:pb-[87px] w-[334px] sm:w-[780px] outline-none"
                placeholder="Your message here "
              ></textarea>
            </div>

            <div>
              <Button className={"w-[200px]"} ButtonText={"Post"} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
