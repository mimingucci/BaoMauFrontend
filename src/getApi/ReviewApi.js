import axios from "axios";
const BASE_URL='http://localhost:8080/baomau/review'
class ReviewApi{
    getAllReviews(){
        return axios.get(BASE_URL+'/get/all');
    }
    getReviewsByUser(user){
        return axios.get(BASE_URL+'/get/user/'+user);
    }
    createReview(rating, headline, content, author, user){
       return axios.post(BASE_URL+'/create', {rating, headline, content}, {params: {authornickname: author, usernickname: user}});
    }
}
export default new ReviewApi();