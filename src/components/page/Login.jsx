import React, { useState } from "react";
import Container from "../layout/Container";
import Bredcumb from "../layout/Bredcumb";
import Headertext from "../layout/Headertext";
import Input from "../layout/Input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const Login = () => {
  let [Show, setShow] = useState(false);

  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");

  let [Password, setPassword] = useState("");
  let [PasswordErr, setPasswordErr] = useState("");

  let ManageEmail = (element) => {
    setEmail(element.target.value);
    setEmailErr("");
  };

  let ManagePassword = (element) => {
    setPassword(element.target.value);
    setPasswordErr("");
  };

  let ManageSubmit = () => {
    if (!email) {
      setEmailErr("Email address cannot be blank.");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      setEmailErr("Please enter a valid email");
    }
    if (!Password) {
      setPasswordErr("Password is required");
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        Password
      )
    ) {
      setPasswordErr(
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
      );
    }
  };

  return (
    <div className="py-32">
      <Container>
        <Bredcumb />
        <div className="mt-32 mb-14 border-b pb-16">
          <p className="max-w-[644px] font-DM font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="Returning Customer flex flex-wrap gap-x-10 gap-y-6 mb-7">
          <Headertext className="w-full" Headertext="Returning Customer" />
          <Input
            className="w-[507px]"
            LabelText="Email address"
            type="Email"
            placeholder="company@domain.com "
            id="Emailaddress"
            InputValue={email}
            onChange={ManageEmail}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {emailErr}
            </p>
          </Input>

          <Input
            className="w-[507px] relative"
            LabelText="Password"
            type={Show ? "text" : "password"}
            placeholder="●●●●●●●●"
            id="Password"
            InputValue={Password}
            onChange={ManagePassword}
          >
            {Show ? (
              <FaRegEye
                onClick={() => setShow(!Show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShow(!Show)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            )}

            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {PasswordErr}
            </p>
          </Input>
        </div>

        <div className="loginbtn border-b border-[#F0F0F0] pb-16 my-14">
          <Button
            onClick={ManageSubmit}
            className="w-[200px] !font-bold"
            ButtonText="Log in"
          />
        </div>

        <div className="Continuebtn">
          <Headertext Headertext="New Customer?" />

          <p className="max-w-[644px] font-DM font-normal text-[#767676] mt-9 mb-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>

          <Link to={"/Sign/Up"}>
            <Button className="w-[200px] !font-bold" ButtonText="Sign Up" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
