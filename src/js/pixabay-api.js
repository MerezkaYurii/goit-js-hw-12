const MY_KEY ="47340673-7535cec7cd04a1914e8f8d439";
import axios from "axios";
const URL = "https://pixabay.com/api/";
const per_page = 15;
export async function serchCategory(categ, page = 1){
  const response = await axios(URL, {
    params:{
    key: MY_KEY, 
    q: categ, 
    image_type: "foto",
    orientation: "horizontal", 
    safesearch: true,
    page, 
    per_page,  

      }
   })
 
   
  return response.data
}


