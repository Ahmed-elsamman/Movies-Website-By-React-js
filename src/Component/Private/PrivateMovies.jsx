import { Navigate } from "react-router";

export default function PrivateMovies({children}) {
  let isAuth = true
  if (isAuth) {
    return children
    } else {
      return <Navigate to="/"/>

    }
  
}
