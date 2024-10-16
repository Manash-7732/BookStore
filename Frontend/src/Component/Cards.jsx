import React from "react";
import books from '../../public/Books3.jpg'

export default function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl duration-300 transform hover:scale-105 p-4 dark:bg-slate-900 dark:text-white">
        <figure>
          <img
            src={books}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">FREE</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-3 py-3">{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-6 py-5">BuyNow</div>
          </div>
        </div>
      </div>
    </>
  );
}
