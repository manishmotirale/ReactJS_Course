import React from "react";

function Button({ buttonText = "Join Karo" }) {
  return (
    <div>
      {" "}
      <button className="m-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700">
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
