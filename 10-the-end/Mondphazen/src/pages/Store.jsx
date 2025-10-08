// // src/pages/Store.jsx
// import React from "react";
// import Loading from "../components/Loading";

// export default function Store({ watches, loading }) {
//   return (
//     <div className="max-w-[1200px] mx-auto px-6 py-16">
//       <h2 className="text-3xl font-semibold mb-8 text-center">
//         Our Collection
//       </h2>

//       {loading ? (
//         // <p className="text-center">Loading...</p>
//         <Loading />
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {watches.map((watch) => (
//             <div
//               key={watch.id}
//               className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform"
//             >
//               <div className="h-56 flex items-center justify-center bg-stone-200">
//                 <img
//                   src={watch.image || "/images/default-watch.png"}
//                   alt={`${watch.brand} ${watch.name || ""}`}
//                   className="h-full object-contain"
//                 />
//               </div>

//               <div className="p-5 text-center">
//                 <h4 className="font-semibold text-stone-500">{watch.brand}</h4>
//                 {watch.name ? (
//                   <h3 className="font-medium text-lg mt-1">{watch.name}</h3>
//                 ) : (
//                   <h3 className="font-medium text-lg mt-1 text-stone-400">
//                     Model TBA
//                   </h3>
//                 )}
//                 <p className="text-stone-500 mt-2">
//                   {watch.price
//                     ? `$${Number(watch.price).toLocaleString()}`
//                     : "Price TBA"}
//                 </p>
//                 <button className="mt-4 bg-stone-900 text-amber-50 px-4 py-2 rounded-lg hover:bg-stone-800">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// src/pages/Store.jsx
import React from "react";
import Loading from "../components/Loading";

export default function Store({ watches, loading }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Our Collection
      </h2>

      {loading ? (
        <div className="text-center py-20">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {watches.map((watch) => (
            <div
              key={watch.id}
              // 1. ADD Flexbox to the Card Container
              className="bg-white rounded-3xl shadow-xl border border-stone-100 
                         transition-all duration-300 hover:shadow-2xl hover:border-stone-200
                         flex flex-col" // <--- ADDED FLEX CLASSES
            >
              {/* Image Container (2. Remains outside the body flex) */}
              <div className="relative pt-[100%] bg-stone-50 rounded-t-3xl">
                <img
                  src={watch.image || "/images/default-watch.png"}
                  alt={`${watch.brand} ${watch.name || ""}`}
                  className="absolute inset-0 w-full h-full object-contain p-8"
                />
              </div>

              {/* 3. Details/Price Container: flex-grow forces it to fill remaining space */}
              <div className="p-6 text-center flex flex-col flex-grow">
                {" "}
                {/* <--- ADDED FLEX-GROW */}
                {/* 4. Top Text Block (Brand/Name) */}
                <div className="mb-auto">
                  {" "}
                  {/* <--- ADDED mb-auto to push content down */}
                  <h4 className="font-medium text-stone-500 tracking-wider uppercase">
                    {watch.brand}
                  </h4>
                  {watch.name ? (
                    <h3 className="font-semibold text-xl mt-2 mb-2">
                      {watch.name}
                    </h3>
                  ) : (
                    <h3 className="font-medium text-xl mt-2 mb-2 text-stone-400">
                      Model TBA
                    </h3>
                  )}
                </div>
                {/* 5. Price and Button Block (This content will be pushed to the bottom) */}
                <div className="mt-4">
                  <p className="text-2xl font-bold text-stone-500 mb-4">
                    {" "}
                    {/* <--- Added mb-4 here */}
                    {watch.price
                      ? `$${Number(watch.price).toLocaleString()}`
                      : "Price TBA"}
                  </p>

                  <button className="bg-stone-900 text-amber-50 w-full py-3 rounded-xl hover:bg-stone-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
