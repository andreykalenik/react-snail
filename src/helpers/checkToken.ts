import axios from "axios"

const checkToken = async() =>{
   
    await axios
    .get(`https://www.strava.com/api/v3/athlete`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('access_token')}`,
        }
    })
    .then((response) => {
        if(response.status === 200){
            console.log(response.data);
            console.log(response.status);
            }
     })
    .catch((error) => {
        console.log(error)
        console.log("fatall error")
        localStorage.clear()
       window.location.reload();
    })
 

}

export default checkToken