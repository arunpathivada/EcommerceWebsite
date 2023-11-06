import axios from "axios";
const BASE_URL = "https://ecommerce-t9ub.onrender.com/api";

const persistRoot = localStorage.getItem("persist:root");
  let admin = ""
  let TOKEN = ""
if (persistRoot) {
  const persistRootParsed = JSON.parse(persistRoot);
  const y=persistRootParsed.user
  const x= JSON.parse(y);
  if(x.currentUser){
  admin = x.currentUser.isAdmin;
  TOKEN = x.currentUser.accessToken;
  }
}
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});