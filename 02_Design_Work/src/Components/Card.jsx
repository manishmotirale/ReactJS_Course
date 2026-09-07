import React from "react";
import Button from "./Button";

const Card = ({ title = "Anythhing Default", buttonText = "Buy it" }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl mt-8 shadow overflow-hidden transition-shadow">
      <img
        className="w-full h-60 object-cover"
        src="https://imgs.search.brave.com/CAxuo9We1TCVOhkXr0kwj_JwvdSjZbDdC0tZCckZusE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE5/NjA4NzEzOS9waG90/by9kb2ctZ2l2ZXMt/cGF3LXRvLWEtd29t/YW4tbWFraW5nLWhp/Z2gtZml2ZS1nZXN0/dXJlLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz05SlN0Q3k4VUFI/S21iUFp4YVdtbmJ5/c21YSHRVS0hfNUl5/MjNYUmxGcm5BPQ"
        alt="Sample Image"
      />

      <div>
        <h2 className="text-lg text-red-600 font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, facere
          praesentium odio repellendus voluptate eos?
        </p>

        <Button />
      </div>
    </div>
  );
};

export default Card;
