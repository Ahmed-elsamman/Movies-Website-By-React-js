import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../Component/Store/Slices/movies";
import { useEffect, useState } from "react";
import { FaHeart, FaHeartBroken ,FaGrinHearts} from "react-icons/fa";
import { addFavorite } from "../../Component/Store/Slices/favorite";

export default function Products() {
  const Navigate = useNavigate();

  let [page, setPage] = useState(1);
  const { movies, error } = useSelector((state) => state.moviesStore);
  const { favMovies } = useSelector((state) => state.favoriteMovies);
  // const isFavorite = favMovies.some(movie => movie.id === prd.id);

  let dispatch = useDispatch();
  // console.log(favMovies);
  let isFavorite;
  const handleFavoriteClick = (prd) => {
    isFavorite = favMovies.some((movie) => movie.id === prd.id);
    console.log(isFavorite);

    if (isFavorite) {
      dispatch(removeFavorite(prd));
    } else {
      dispatch(addFavorite(prd));
    }
  };

  // }

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  //call api with Axios
  useEffect(() => {
    dispatch(moviesAction(page));
  }, [movies, page]);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((prd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 py-5">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`}
                  alt="Product Image"
                />
              </a>
              <div className="p-4">
                <div className="flex ">
                  <h5 className="text-lg font-bold text-gray-900 dark:text-white mr-11">
                    {prd.title}
                  </h5>
                  <button
                    onClick={() => {
                      dispatch(handleFavoriteClick(prd));
                    }}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border  border-blue-500 hover:border-transparent rounded"
                  >
                    {(isFavorite==true) ? <FaHeart/> : <FaGrinHearts/>}
                  </button>
                </div>

                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                  Price : {prd.price}$
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  popularity : {prd.popularity}
                </p>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                  Release date: {prd.release_date}
                </p> */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  vote Average : {prd.vote_average}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  vote Count : {prd.vote_count}
                </p>
                <button
                  onClick={() => {
                    Navigate(`/product/${prd.id}`);
                  }}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2
                  my-3 px-4 rounded"
                >
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto p-9 ">
        <button
          className="relative inline-flex items-center justify-center px-48.5 mb-2 me-60 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 "
          onClick={prevPage}
        >
          <span className="relative px-52 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Prev Page
          </span>
        </button>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          onClick={nextPage}
        >
          <span className="relative px-52 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Next Page
          </span>
        </button>
      </div>
    </div>
  );
}
