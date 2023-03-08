import React from "react";

const Newsletter = () => {
  return (
    <div>
      <h3 className="pb-2">NEWSLETTER</h3>
      <div>
        <input
          type="text"
          placeholder="Your email address"
          className="py-2 placeholder:pl-2"
        />
        <button type="submit" className="bg-red-700 px-2 py-2 text-base">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
