import React from "react";

const Recommendation = ({ recom }) => {
  const { name, recipe, image } = recom;
  return (
    <div>
      <div class="max-w-2xl mx-auto my-10">
        <div class="bg-white shadow-md rounded-lg max-w-sm h-[375px]">
          <a href="#">
            <img class="" src={image} />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h3 class=" font-semibold text-xl">{name}</h3>
            </a>
            <div className="my-3 h-[63px]">{recipe}</div>
            <div className="bg-[#1F2937] text-[#BB8506] p-2 w-fit rounded-lg font-semibold">
                <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
