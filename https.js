import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"

export async function getUsers(page = 1){
    try{
        const response = await axios.get(API_URL, {
            params: { _limit: 5, _page: page},  // Fetch 5 users per page
          })
        // console.log(JSON.stringify(response))
        return response;
    }
    catch(error){
        console.log("Something went wrong, unable to fetch the user data.", error)
    } 
}