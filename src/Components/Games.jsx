// This component fetches action games data from an API and displays the games using the "Games" component.
// The component also includes a shopping cart icon that opens a navbar to manage cart items.

import React, { useState, useEffect } from "react";
import { useContextGlobally } from "./StateProvider";
import demo_image from "../assets/Images/home/demo_image.jpg";
import logo from "../assets/Images/logo/add-to-cart.png";
import Navbar from "./Navbar";

function Games() {
  // State to store fetched games data and loading status
  const [games, setGames] = useState();

  // Access global state and actions using context
  const { addToCart, toogle, cart, toogleFalse, toogleTrue } =
    useContextGlobally();

  // Fetch games data from the API when the component mounts
  useEffect(() => {
    // Put your axios/fetch api request here and use setGames() method to place your data into games state here 👇
    // Remove the setGames demo data before fetching the data 👇
    setGames([
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
      { data: "demo" },
    ]);
  }, []);

  // Debugging: log the fetched games data
  // console.log(games);

  return (
    <div className="bg-black ">
      {/* Shopping cart icon */}
      <div className="absolute flex flex-col-reverse right-12 top-6">
        <img
          width="48"
          height="48"
          src={logo}
          alt="shopping-cart--v1"
          onClick={() => (toogle ? toogleFalse() : toogleTrue())}
        />

        {/* Place your cart length or number of items in cart here 👇 */}
        <span className="relative text-white pl-5 font-bold text-2xl top-4">
          0
        </span>
      </div>

      {/* Navbar */}
      {toogle && <Navbar />}

      {/* Title Wrapper */}
      <div className="container mx-auto pt-9 mt-8">
        <h1 className="text-6xl font-bold text-white text-center ">
          RAWG Games
        </h1>
      </div>

      <>
        {/* Card Wrapper */}
        <section>
          <div className="container justify-center max-w-xs md:max-w-fit mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-between">
            {games?.map((single, index) => {
              return (
                <div key={index}>
                  <div className="w-[310px] h-[315px] bg-slate-800 rounded-xl ml-5 my-5 hover:shadow-xl hover:transform hover:scale-105 duration-300">
                    {/* Game background image */}
                    {/* Place your json data.background_image here 👇 */}
                    <img
                      className="rounded-t-xl min-w-[300px] max-h-44 object-contain"
                      src={demo_image}
                      alt=""
                    />
                    {/* Platform icons */}
                    {/* Place windows playstation and xbox icons here 👇 */}
                    <div className="flex mt-4 ml-4 justify-between" key={index}>
                      <div className="flex space-x-3">
                        {/* Windows icon here 👇  */}
                        <img src="" className="w-3 object-contain" />
                        {/* Playstation icon here 👇  */}
                        <img src="" alt="" className="w-4 object-contain" />
                        {/* Xbox icon here 👇  */}
                        <img src="" alt="" className="w-3 object-contain" />
                      </div>
                      {/* Game price */}
                      {/* Place your json data.playtime icon here 👇  */}
                      <div className="flex text-lime-500 border border-lime-500 w-20 h-[30px] justify-center mr-4 font-medium items-center rounded-lg">
                        sample
                      </div>
                    </div>
                    <div className="ml-4 mt-1">
                      {/* Game title */}
                      {/* Place your game title here 👇  */}
                      <h1 className="text-white font-bold text-2xl truncate">
                        Placeholder
                      </h1>
                      {/* Plus logo and added status */}
                      <div className="flex text-white bg-slate-700 w-16 text-sm h-7 items-center space-x-32 mt-3 rounded-sm">
                        <div className="flex ml-2 space-x-1">
                          {/* Place your plus icon here 👇 */}
                          <img src="" alt="" width={"13px"} />
                          {/* Place your json data.added here 👇  */}
                          <p className="text-xs"> demo</p>
                        </div>
                        <div className="">
                          {/* Add to cart button */}
                          {/* Place your onclick add to cart here 👇  */}
                          <button className="bg-slate-800 w-24 h-7 rounded-xl hover:text-lime-500 hover:bg-slate-800 border hover:border-lime-500 text-white">
                            Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    </div>
  );
}

export default Games;
