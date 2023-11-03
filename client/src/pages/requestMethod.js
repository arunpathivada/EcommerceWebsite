import axios from "axios";
const BASE_URL = process.env.ADD;

const persistRoot = localStorage.getItem("persist:root");
  let admin = ""
  let TOKEN = ""
if (persistRoot) {
  const persistRootParsed = JSON.parse(persistRoot);
  const y=persistRootParsed.user
  const x= JSON.parse(y);
  console.log(x);
  admin = x.currentUser.isAdmin;
  TOKEN = x.currentUser.accessToken;
}
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});