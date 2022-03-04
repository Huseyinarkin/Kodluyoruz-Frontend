import getData from "./app.js";

const userAndPostData = await getData(2);

console.log(userAndPostData.user,userAndPostData.post)