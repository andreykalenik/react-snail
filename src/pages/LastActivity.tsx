import { useLocation } from "react-router-dom"
const LastActivity = () =>{
    console.log(useLocation())
    return(
        <>
            <h1>Last Activity</h1>
        </>

    )
}

export default LastActivity