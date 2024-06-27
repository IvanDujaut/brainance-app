import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "worker";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "worker">>;
};

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
        <h2 className="text-gravel md:text-4xl font-bold">Create an account</h2>
        <p>
            Tell us about yourself! What do you do? Let’s tailor your
            <br /> experience so it best suits you.
        </p>
        <UserTypeCard
            value="owner"
            title="I own a business."
            text="Setting up my account for my company."
            register={register}
            userType={userType}
            setUserType={setUserType}
        ></UserTypeCard>
        <UserTypeCard
            value="worker"
            title="I’m a worker."
            text="Looking to manage my taxes and personal finances."
            register={register}
            userType={userType}
            setUserType={setUserType}
        ></UserTypeCard>
    </>
  );
};

export default TypeSelectionForm;
