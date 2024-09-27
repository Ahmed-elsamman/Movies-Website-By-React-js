import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../Component/Store/Slices/language";

export default function About() {
  const lang = useSelector((state) => state.lang.language);
  // console.log(lang)
  const Dispatch = useDispatch();

  const changeLanguageFromBtn = () => {
    // code to change language from button click
    Dispatch(changeLanguage(lang == "en" ? "ar" : "en"));
  };

  return (
    <div>
      About......... this is language :
      <h1 className=" bg-green-700 font-bold  p-8"> {lang} </h1>
      <button
        onClick={changeLanguageFromBtn}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-8 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Green
      </button>
    </div>
  );
}
