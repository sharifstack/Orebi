import React, { useState } from "react";
import Container from "../layout/Container";
import Headertext from "../layout/Headertext";
import Bredcumb from "../layout/Bredcumb";
import { FaAngleRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Input from "../layout/Input";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  let Division = [
    "Barishal",
    "Chattogram",
    "Dhaka",
    "Khulna",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
    "Sylhet",
  ];

  const Districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chattogram",
    "Chuadanga",
    "Comilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  let [Show, setShow] = useState(false);
  let [Repeat, setRepeat] = useState(false);

  let [FirstName, setFirstName] = useState("");
  let [FirstNameErr, setFirstNameErr] = useState("");

  let [LastName, setLastName] = useState("");
  let [LastNameErr, setLastNameErr] = useState("");

  let [Password, setPassword] = useState("");
  let [PasswordErr, setPasswordErr] = useState("");

  let [Repeatpass, setRepeatPass] = useState("");
  let [RepeatpassErr, setRepeatPassErr] = useState("");

  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");

  let [address1, setAddress1] = useState("");
  let [address1Err, setAddress1Err] = useState("");

  let [address2, setAddress2] = useState("");
  let [address2Err, setAddress2Err] = useState("");

  let [city, setCity] = useState("");
  let [CityErr, setCityErr] = useState("");

  let [postalcode, setPostalCode] = useState("");
  let [postalcodeErr, setPostalCodeErr] = useState("");

  let [telephone, setTelephone] = useState("");
  let [telephoneErr, setTelephoneErr] = useState("");

  let ManageFirstName = (element) => {
    setFirstName(element.target.value);
    setFirstNameErr("");
  };

  let ManageLastName = (element) => {
    setLastName(element.target.value);
    setLastNameErr("");
  };

  let ManagePassword = (element) => {
    setPassword(element.target.value);
    setPasswordErr("");
  };

  let ManageRepeatPass = (element) => {
    setRepeatPass(element.target.value);
    setRepeatPassErr("");
  };

  let ManageEmail = (element) => {
    setEmail(element.target.value);
    setEmailErr("");
  };

  let ManageAddress1 = (element) => {
    setAddress1(element.target.value);
    setAddress1Err("");
  };

  let ManageAddress2 = (element) => {
    setAddress2(element.target.value);
    setAddress2Err("");
  };

  let ManageCity = (element) => {
    setCity(element.target.value);
    setCityErr("");
  };

  let ManagePostalCode = (element) => {
    setPostalCode(element.target.value);
    setPostalCodeErr("");
  };

  let ManageTelephone = (element) => {
    setTelephone(element.target.value);
    setTelephoneErr("");
  };

  let ManageSubmit = () => {
    if (!FirstName) {
      setFirstNameErr("First name is required!");
    }
    if (!LastName) {
      setLastNameErr("Last name is required!");
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

    if (!Repeatpass) {
      setRepeatPassErr("Please fill out this field.");
    } else if (Repeatpass != Password) {
      setRepeatPassErr("password does not match.");
    }
    if (!email) {
      setEmailErr("Email address cannot be blank.");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      setEmailErr("Please enter a valid email");
    }
    if (!address1) {
      setAddress1Err("Address 1 is required.");
    }
    if (!address2) {
      setAddress2Err("Address 2 is required.");
    }
    if (!city) {
      setCityErr("City is required.");
    }
    if (!postalcode) {
      setPostalCodeErr("Post Code is required.");
    }
    if (!telephone) {
      setTelephoneErr("Phone number is required.");
    }
  };

  return (
    <div className="py-32">
      <Container>
        <div>
          <Headertext
            className="mb-2.5"
            Headertext={`${window.location.pathname.split("/")[1]} ${
              window.location.pathname.split("/")[2]
            }`}
          />
          <p className="flex items-center capitalize text-[#767676]">
            Home <FaAngleRight />{" "}
            {`${window.location.pathname.split("/")[1]} ${
              window.location.pathname.split("/")[2]
            }`}
          </p>
        </div>
        <div className="mt-32 mb-14 border-b pb-16">
          <p className="max-w-[644px] font-DM font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="details my-10 flex flex-wrap gap-x-10 gap-y-6 border-b pb-16 mb-16">
          <Headertext className="w-full" Headertext="Your Personal Details" />
          <Input
            className="w-[507px]"
            LabelText="First Name"
            type="text"
            placeholder="First Name"
            id="FirstName"
            InputValue={FirstName}
            onChange={ManageFirstName}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {FirstNameErr}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            LabelText="Last Name"
            type="text"
            placeholder="Last Name"
            id="LastName"
            InputValue={LastName}
            onChange={ManageLastName}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {LastNameErr}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            LabelText="Email address"
            type="Email"
            placeholder="company@domain.com"
            id="Emailaddress"
            InputValue={email}
            onChange={ManageEmail}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {emailErr}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            LabelText="Telephone"
            type="number"
            placeholder="Your phone number"
            id="Telephone"
            InputValue={telephone}
            onChange={ManageTelephone}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {telephoneErr}
            </p>
          </Input>
        </div>

        <div className="customer my-10 flex flex-wrap gap-x-10 gap-y-6 border-b pb-16 mb-16">
          <Headertext className="w-full" Headertext="New Customer" />
          <Input
            className="w-[507px]"
            LabelText="Address 1"
            type="text"
            placeholder="4279 Zboncak Port Suite 6212 "
            id="Address1"
            InputValue={address1}
            onChange={ManageAddress1}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {address1Err}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            LabelText="Address 2"
            type="text"
            placeholder="—"
            id="Address 2"
            InputValue={address2}
            onChange={ManageAddress2}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {address2Err}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            LabelText="City"
            type="text"
            placeholder="Your city"
            id="City"
            InputValue={city}
            onChange={ManageCity}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {CityErr}
            </p>
          </Input>

          <Input
            className="w-[507px]"
            LabelText="Post Code"
            type="text"
            placeholder="05228"
            id="PostCode"
            InputValue={postalcode}
            onChange={ManagePostalCode}
          >
            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {postalcodeErr}
            </p>
          </Input>

          <div className="division border-b w-[507px]">
            <label htmlFor="Division">Division</label>
            <select
              className="block w-full outline-none pt-2.5 pb-4"
              id="Division"
            >
              <option value="Please select">Please select</option>

              {Division.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="district border-b w-[507px]">
            <label htmlFor="District">District</label>
            <select
              className="block w-full outline-none pt-2.5 pb-4"
              id="Division"
            >
              <option value="Please select">Please select</option>
              {Districts.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="password my-10 flex flex-wrap gap-x-10 gap-y-6 border-b pb-16 mb-16">
          <Headertext className="w-full" Headertext="Your Personal Details" />
          <Input
            className="w-[507px] relative"
            LabelText="Password"
            type={Show ? "text" : "password"}
            placeholder="Password"
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

          <Input
            className="w-[507px] relative"
            LabelText="Repeat password"
            type={Repeat ? "text" : "password"}
            placeholder="Repeat password"
            id="Password"
            InputValue={Repeatpass}
            onChange={ManageRepeatPass}
          >
            {Repeat ? (
              <FaRegEye
                onClick={() => setRepeat(!Repeat)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setRepeat(!Repeat)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            )}

            <p className="absolute left-0 top-full text-red-600 text-xs font-DM mt-1">
              {RepeatpassErr}
            </p>
          </Input>
        </div>

        <div className="policy flex gap-4 items-center">
          <input
            className="relative appearance-none w-2.5 h-2.5 border border-[#767676] checked:bg-[#767676] after:content[''] after:absolute after:w-2 after:h-2 after:bg-[#767676] after:border-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border after:opacity-0 checked:after:opacity-100"
            type="checkbox"
            id="policy"
          />
          <label
            className="text-ptext text-sm font-DM font-normal"
            htmlFor="policy"
          >
            I have read and agree to the Privacy Policy
          </label>
        </div>

        <div className="newsletter my-6 flex gap-10 items-center">
          <div>
            <p className="text-ptext text-sm font-DM font-normal">
              Subscribe Newsletter
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <input
              className="relative appearance-none w-2.5 h-2.5 border border-[#767676] checked:bg-[#767676] after:content[''] after:absolute after:w-2 after:h-2 after:bg-[#767676] after:border-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border after:opacity-0 checked:after:opacity-100"
              type="radio"
              id="Yes"
              name="Newsletter"
            />
            <label
              className="text-ptext text-sm font-DM font-normal"
              htmlFor="Yes"
            >
              Yes
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              className="relative appearance-none w-2.5 h-2.5 border border-[#767676] checked:bg-[#767676] after:content[''] after:absolute after:w-2 after:h-2 after:bg-[#767676] after:border-white after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:border after:opacity-0 checked:after:opacity-100"
              type="radio"
              id="No"
              name="Newsletter"
            />
            <label
              className="text-ptext text-sm font-DM font-normal"
              htmlFor="No"
            >
              No
            </label>
          </div>
        </div>

        <div className="Loginbtn">
          <Link to={"/Login"}>
            <Button
              onClick={ManageSubmit}
              className="w-[200px] !font-bold"
              ButtonText="Log in"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
