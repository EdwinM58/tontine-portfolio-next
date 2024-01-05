import React from "react";

const MyStorePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-32 py-16">
        <h1 className="text-6xl font-bold">My Products</h1>
        <div className="flex-col">
          <div>
            <label>
              search:{" "}
              <input
                className="border-2 p-[4px] rounded-md"
                placeholder="Search"
                type="text"
              />
            </label>
          </div>
          <div>filter</div>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex justify-between px-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="flex justify-between px-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="bg-green-300 flex flex-col justify-end w-64 h-[500px] mt-8">
      <div className="bg-gray-400 relative h-full">Image</div>
      <div className=" flex flex-col justify-end w-64 h-[500px] mt-8">
        <div className="bg-red-300">
          <h1>Product Title</h1>
          <p>Description</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
};

export default MyStorePage;
