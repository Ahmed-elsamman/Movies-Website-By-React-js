import { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router";
import { axiosInstance } from "../../Services/axiosInstance";

export default function DetailsProduct() {
  const { id } = useParams();
  const [prd, setProduct] = useState({});

  const getPrd = async () => {
    try {
      const res = await axiosInstance.get(`/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  //call api with Axios
  useEffect(() => {
    getPrd();
  }, []);

  return (
    <>
      <a className=" mx-auto   flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal p-9 ">
          <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-cyan-600">
            {" "}
            {prd.title}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-green-300">
            overview: {prd.overview}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            popularity : {prd.popularity}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            vote Average : {prd.vote_average}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            vote Count : {prd.vote_count}
          </p>
        </div>
      </a>
    </>
  );
}


