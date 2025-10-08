import { Link } from "react-router-dom";
import bg_image from "../assets/bg_image.png";
import Loading from "../components/Loading";

export default function Home({ watches, loading }) {
  return (
    <div>
      <section
        className="flex flex-col items-center justify-center text-center bg-amber-50 py-24 
        bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <h1 className="text-5xl font-bold mb-4 text-amber-50">
          Timeless Craftsmanship
        </h1>
        <p className="text-lg  text-amber-50 mt-10 mb-10">
          Discover watches that are crafted with precision, inspired by the
          rhythm of the moon.
        </p>
        <Link
          to="/store"
          className="text-stone-900 bg-amber-50 px-6 rounded-lg hover:bg-stone-300 py-3"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Section */}

      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Watches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            // <p className="text-center col-span-3">Loading...</p>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center items-center py-10">
              <Loading />
            </div>
          ) : (
            watches.map((watch) => (
              <div
                key={watch.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="h-56 flex items-center justify-center bg-stone-200">
                  <img
                    src={watch.image || "/images/default-watch.png"}
                    alt={`${watch.brand} ${watch.name || ""}`}
                    className="h-full object-contain"
                  />
                </div>
                <div className="p-5 text-center">
                  {/* Brand on top */}
                  <h4 className="font-semibold text-stone-500">
                    {watch.brand}
                  </h4>
                  {/* Watch name on next line if it exists */}
                  {watch.name ? (
                    <h3 className="font-medium text-lg mt-1">{watch.name}</h3>
                  ) : (
                    <h3 className="font-medium text-lg mt-1 text-stone-400">
                      Model TBA
                    </h3>
                  )}
                  <p className="text-stone-500 mt-2">
                    {watch.price
                      ? `$${Number(watch.price).toLocaleString()}`
                      : "Price TBA"}
                  </p>
                  <button className="mt-4 bg-stone-900 text-amber-50 px-4 py-2 rounded-lg hover:bg-stone-800">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-stone-100 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="max-w-2xl mx-auto text-stone-600">
          At Mondphazen, we blend modern design with timeless tradition. Every
          watch we create is a reflection of passion, precision, and elegance.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block bg-stone-900 text-amber-50 px-6 py-3 rounded-lg hover:bg-stone-800"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
}
