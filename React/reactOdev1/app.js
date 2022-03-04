import axios from "axios";

// Make a request for a user with a given ID
async function getData(userId){

    const {data: userData} = await axios('https://jsonplaceholder.typicode.com/users/'+userId);

    const {data: postData} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+userId);

    return{user:userData, post:postData}
}

export default getData