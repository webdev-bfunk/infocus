import React from "react";

const Card = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-5">
      <div className="card lg:card-side bg-gray-300 text-gray-900 shadow-xl">
        <figure>
          <img
            src="/pexelcamera2.jpg"
            alt="Album"
            className="h-[300px] w-[500px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Welcome to InFocus Photography</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente quae, iure obcaecati quaerat, beatae, dolor ex harum laborum ea autem vitae. Ipsum officiis nesciunt placeat minima ea suscipit delectus.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-primary text-white">See past work</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-gray-300 text-gray-900 shadow-xl">
        <figure>
          <img
            src="/pexe1.jpg"
            alt="Album"
            className="h-[300px] w-[500px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Book now for great Spring DEALS!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente quae, iure obcaecati quaerat, beatae, dolor ex harum laborum ea autem vitae. Ipsum officiis nesciunt placeat minima ea suscipit delectus.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-primary-foreground text-primary">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
