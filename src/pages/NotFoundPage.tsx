import { useNavigate } from "react-router-dom"
import Button from "../components/Button";
import PageTemplate from "../components/PageTemplate";
import HeaderTemplate from "../components/HeaderTemplate";

const NotFoundPage = () =>{

    const navigate = useNavigate()
    
    return(
        <>
        <HeaderTemplate/>
        <PageTemplate>
            <h2>Ooops...</h2>
            <p>Page not found</p>
            <Button onClick={(() => navigate("/"))}>Back to home</Button>
        </PageTemplate>
        </>

    )
}



export default NotFoundPage