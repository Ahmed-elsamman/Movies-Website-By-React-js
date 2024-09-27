import { useNavigate } from "react-router"
import { Button } from "@material-tailwind/react";
import TestHookComponent from "../../Component/TestHookComponent/TestHookComponent";


export default function Contact() {

   const Navigate = useNavigate()

  return (
    <>Contact....
    <Button className="bg-red-700 border-spacing-1" onClick={()=>{ Navigate("/")}}> Go to Home </Button>
    <TestHookComponent />
    
    </>
  )
}
