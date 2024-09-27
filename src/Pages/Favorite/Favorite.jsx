import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { FaHeartBroken } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useEffect } from "react";

export default function Favorite() {
  const { favMovies } = useSelector((state) => state.favoriteMovies);
  const dispatch = useDispatch();

  useEffect(() => {}, [favMovies]);

  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favMovies.map((prd, index) => (
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
                        dispatch(removeFavorite(prd));
                      }}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border  border-blue-500 hover:border-transparent rounded"
                    >
                      <MdDeleteSweep />
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
