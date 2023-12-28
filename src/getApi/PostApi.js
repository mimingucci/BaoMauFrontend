import axios from "axios";
const BASE_URL='http://localhost:8080/baomau/post'
class PostApi{
    getAllPosts(){
        return axios.get(BASE_URL+'/get/all');
    }
    createPost(headline, content, author){
       return axios.post(BASE_URL+'/create', {headline, content}, {params: {nickname: author}});
    }
}
export default new PostApi();