import { useState } from "react";
import "./newProduct.css";
import app from "../../../src/firebase.js";
import { getStorage,ref } from 'firebase/storage';
export default function NewProduct() {
  const [inputs,setInputs]= useState({});
  const [file,setFile]= useState(null);
  const [cat,setCat]= useState([]);
  const handleChange = (e)=>{
    setInputs(prev=>{
      return {...prev,[e.target.name]:e.target.value}})
    }
  const handleCat = (e)=>{
    setCat(e.target.value.split(","))
  }
  console.log(file);
  const handleClick = (e)=>{
    e.preventDefault();
    const fileName= new Date().getTime() +file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage,fileName);
   

  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name = "title" type="text" placeholder="product title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" id="active"  onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="0"  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input name="categories"type="text" placeholder="jeans,shirts.."  onChange={handleCat}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="description.."  onChange={handleChange}/>
        </div>

        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
