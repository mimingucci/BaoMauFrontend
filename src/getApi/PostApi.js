import axios from "axios";
const BASE_URL='http://localhost:8080/baomau/post'
class PostApi{
    getAllPosts(){
        return axios.get(BASE_URL+'/get/all');
    }
}
export default new PostApi();