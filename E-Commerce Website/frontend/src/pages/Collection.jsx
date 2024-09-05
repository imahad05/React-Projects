import React, { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { ProductItem, Title } from "../components";

const Collection = () => {
  const { products, search, showSearch } = useShop();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) =>
        prev.filter((product) => product !== e.target.value)
      );
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) =>
        prev.filter((product) => product !== e.target.value)
      );
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = async () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = await productsCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = await products.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = await productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // category filter
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  // sort type effect
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Side */}
      <div className="min-w-60">
        <p
          className="flex items-center text-xl my-2 cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title textOne={"ALL"} textTwo={"collections"} />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Mab products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              img={product.image}
              price={product.price}
              name={product.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
