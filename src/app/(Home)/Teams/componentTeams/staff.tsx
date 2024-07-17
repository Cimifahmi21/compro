import Image from "next/image";
import React from "react";

export default async function Staff() {
  const res = await fetch("https://randomuser.me/api/?results=10", {
    method: "GET",
  });

  const data = await res.json();

  return (
    <section className="bg-white pt-20">
        <h1 className="text-black text-center text-4xl font-bold pb-9">Teams by digital aliance</h1>
      <div className="flex flex-wrap gap-5  items-center justify-center max-w-7xl mx-auto">
        {data.results.map((item: any, idx: any) => (
          <div key={idx}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={item.picture.large}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {item.name.first} {item.name.last}
                </h2>
                <p>{item.phone}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
