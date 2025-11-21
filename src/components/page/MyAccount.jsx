import React from "react";
import Bredcumb from "../layout/Bredcumb";
import Container from "../layout/Container";

const MyAccount = () => {
  return (
    <div className="my-32">
      <Container>
        <Bredcumb />

        <div className="flex gap-10">
          <div className="left w-1/4">
            <div className="flex flex-col gap-5">
              <h2 className="font-DM text-base text-ptext font-normal hover:font-bold hover:text-Primary transition-all duration-200 cursor-pointer pb-5 border-b">
                Dashboard
              </h2>

              <h2 className="font-DM text-base text-ptext font-normal hover:font-bold hover:text-Primary transition-all duration-200 cursor-pointer pb-5 border-b">
                Others
              </h2>

              <h2 className="font-DM text-base text-ptext font-normal hover:font-bold hover:text-Primary transition-all duration-200 cursor-pointer pb-5 border-b">
                Donwloads
              </h2>

              <h2 className="font-DM text-base text-ptext font-normal hover:font-bold hover:text-Primary transition-all duration-200 cursor-pointer pb-5 border-b">
                Addresses
              </h2>

              <h2 className="font-DM text-base text-ptext font-normal hover:font-bold hover:text-Primary transition-all duration-200 cursor-pointer pb-5 border-b">
                Account details
              </h2>

              <h2 className="font-DM text-base text-ptext font-normal hover:font-bold hover:text-Primary transition-all duration-200 cursor-pointer pb-5 border-b">
                Logout
              </h2>
            </div>
          </div>
          <div className="right w-3/4">
            <h4 className="mb-10">
              Hello <b>admin</b> (not <b>admin?</b> <b>Log out</b>)
            </h4>
            <p className="max-w-[918px]">
              From your account dashboard you can view your <b>recent orders</b>
              , manage your <b>shipping and billing addresses</b>, and 
              <b> edit your password and account details</b>.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyAccount;
