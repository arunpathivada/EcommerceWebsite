import axios from "axios";
const BASE_URL = "https://ecommerce2-emjf.onrender.com/api";

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
console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});
