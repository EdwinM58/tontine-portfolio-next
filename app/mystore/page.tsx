"use client";

import React, { useMemo, useEffect, useState } from "react";
// import products from "../db.json";
import Image from "next/image";
import Search from "../_components/Search";

const MyStorePage = () => {
  // Define component state
  const [query, setQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("lowToHigh");
  const [products, setProducts] = useState<Products[]>([]);

  // Fetch product data on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  
  // Memoize filtered products and asign value based on query and product state change
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  // Memoize sorted products
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sortOrder === "lowToHigh") {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    return sorted;
  }, [filteredProducts, sortOrder]);

  // Handlers to pass as props
  const handleQuery = (q: string) => {
    setQuery(q);
  };
  const handleOrder = (o: string) => {
    setSortOrder(o);
  };

  return (
    <div className="relative flex flex-col">
      <div className="sm:flex sm:justify-between space-y-4 p-4">
        <h1 className="sm:text-6xl text-4xl font-bold flex justify-start items-center">
          My Products
        </h1>
        <Search
          query={query}
          setQuery={handleQuery}
          sortOrder={sortOrder}
          setSortOrder={handleOrder}
        />
      </div>

      <div className="flex flex-wrap justify-center mt-12 mb-24">
        {sortedProducts.map((e, i) => (
          <ProductCard
            key={e.id}
            name={e.title}
            description={e.description}
            price={e.price}
            imgUrl={
              e.images[i] == undefined
                ? "https://upload.wikimedia.org/wikipedia/commons/c/ce/Cybertruck-fremont-cropped.jpg"
                : e.images[i]
            }
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({
  name,
  description,
  price,
  imgUrl,
}: ProductCardProps) => {

  return (
    <div className=" drop-shadow-lg rounded-xl mx-auto bg-gray-300 flex flex-col justify-end w-64 h-[500px] mt-8">
      <Image
        src={imgUrl}
        height={300}
        width={300}
        alt="product"
        className="rounded-t-xl relative w-auto h-auto "
      />
      <div className=" flex flex-col justify-end w-64 h-[500px] mt-8">
        <div className="p-2  rounded-b-xl">
          <h1 className="text-l font-bold">{name}</h1>
          <p>{description}</p>
          <p className="mt-4 font-bold">
            <span className="text-green-700">$ </span>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyStorePage;
