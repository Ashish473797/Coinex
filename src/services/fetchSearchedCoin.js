import axiosInstance from "../helpers/axiosInstance";

export async function fetchSearchedCoin(searchedTerm = "bitcoin"){
    try{
        const response = await axiosInstance.get(`/search?query=${searchedTerm}`);
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}