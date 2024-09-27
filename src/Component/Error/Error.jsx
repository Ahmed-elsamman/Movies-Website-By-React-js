import { useRouteError } from "react-router"

export default function Error() {

  const error  =useRouteError()
  return (
    <>Error Iss append show it Pleas =========:
    {error.message}
    </>
  )
}
