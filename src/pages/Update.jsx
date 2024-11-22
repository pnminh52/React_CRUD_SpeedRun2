import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const { id } = useParams();
  const currentProduct = products.find((item) => item.id == id);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...currentProduct, ...inputValue };
    onHandleUpdate(updateData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <p className="font-bold mb-2 mt-2 text-center text-xl ">Update product</p>

      <form onSubmit={onUpdate} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onHandleChange}
            defaultValue={currentProduct?.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            placeholder="price"
            onInput={onHandleChange}
            defaultValue={currentProduct?.price}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            placeholder="description"
            onInput={onHandleChange}
            defaultValue={currentProduct?.description}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
