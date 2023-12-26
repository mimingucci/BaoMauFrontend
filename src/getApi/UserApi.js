import axios from "axios";
const BASE_URL='http://localhost:8080/baomau/user'
class UserApi{
    getAllUsers(){
        return axios.get(BASE_URL+'/get/all');
    }
    getUserByNickname(nickname){
        return axios.get(BASE_URL+'/get/'+nickname)
    }
    getListUserByRating(page){
        return axios.get(BASE_URL+'/rating/'+page)
    }
    getTopContributors(){
        return axios.get(BASE_URL+'/topcontributors')
    }
    getResultBySearch(keyword){
        return axios.get(BASE_URL+'/search', {params: {query: keyword}})
    }
}
export default new UserApi();