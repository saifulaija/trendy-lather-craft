import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-black text-white py-20 h-screen flex justify-center items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          Welcome to Trendy Leather Craft
        </h1>
        <p className="text-lg mb-8">
          Explore our exquisite collection of handmade leather products.
        </p>
        <Link
          to="/shop"
          className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold inline-flex items-center transition duration-300 hover:bg-gray-300"
        >
          Explore Products <FiArrowRightCircle className="ml-2 text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
