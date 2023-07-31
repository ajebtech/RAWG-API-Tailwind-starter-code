// This component represents the shopping cart section in the navigation bar.
// It displays the items in the cart with their respective details like name, price, and quantity.
// Users can increment or decrement the quantity of items or remove them from the cart.
// The component also calculates and displays the total price and tax of the items in the cart.

import { useContextGlobally } from "./StateProvider";
import demo_image from "../assets/Images/home/demo_image.jpg";

function Navbar() {
  // Extracting cart-related functions and data from the global context
  const { cart, clearCart, toogleFalse } = useContextGlobally();
  
  let democart = [
    {
      name: "hello",
      price: 100,
      image: "image",
      id: 1,
    },
  ];

  return (
    <>
      {/* Navbar Section */}
      <section className="container absolute max-w-full flex justify-center md:justify-end right-12">
        {/* Shopping Cart */}
        <div
          className="container max-w-96 mt-3 z-10 relative md:justify-end md:max-w-2xl border border-slate-700 bg-slate-800 py-8 sm:px-6 lg:px-8 rounded-xl"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          {/* Close button */}
          <button
            className="absolute end-4 top-4 text-white transition hover:scale-110"
            onClick={() => toogleFalse()}
          >
            <span className="sr-only">Close cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-4 space-y-6">
            <ul className="space-y-4">
              {/* Displaying items in the cart */}

              {democart?.map((single, index) => {
                return (
                  <li className="flex items-center gap-4" key={single.id}>
                    {/* Place your image from cart data here 👇 */}
                    <img
                      src={demo_image}
                      alt=""
                      className="h-32 w-56 rounded object-contain"
                    />
                    <div>
                      {/* Item name */}
                      <h3 className="text-white text-2xl font-bold">
                        Put item title here
                      </h3>
                      <dl className="mt-0.5 space-y-px text-[10px] text-white">
                        {/* Item price */}
                        <div>
                          <div className="inline text-xl font-bold">
                            Price :
                          </div>
                          <div className="inline text-xl text-lime-500 font-bold ml-2">
                            $ Put single price here
                          </div>
                        </div>
                      </dl>
                    </div>
                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center w-30 justify-between"></div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* Cart total */}
            <hr />
            <h1 className="flex text-2xl text-lime-500 font-bold justify-end mr-4">
              <p className="text-white mr-3"> Total :</p>$ Put the total price
              here
            </h1>
            <div className="space-y-4 text-center">
              {/* Clear button */}
              <button
                onClick={() => clear()}
                className="flex items-center justify-center w-full rounded bg-gray-700 px-5 py-5 text-sm text-gray-100 transition hover:bg-slate-600"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
