import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex group items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full outline-none text-white transition-all focus:scale-110 hover:scale-110 active:scale-105  disabled:scale-100 disabled:bg-opacity-65 bg-white bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5  w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
