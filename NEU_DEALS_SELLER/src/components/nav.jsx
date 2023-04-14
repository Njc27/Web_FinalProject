import react from "react"
import { useNavigate } from "react-router-dom"
export default function(){
    const navigate=useNavigate();
    const handleback=(event)=>{
        navigate('/sell')
    }
    return(
        <>
            <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <h2 className="mx-3" onClick={handleback}> &larr; </h2>
            </div>
            </nav>
        </>

    )

}