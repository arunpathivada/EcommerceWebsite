import { Link, useLocation} from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import {useSelector} from "react-redux";
import {userRows,productData} from "../../dummyData.js"
export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector(state=>state.product.products.find((product)=>product._id === productId))
    console.log(product.inStock);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">{product.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      {product.inStock?<span className="productInfoValue">True</span>:<span className="productInfoValue">False</span>}

                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="name" />
                  <label>In Stock</label>
                  <select name="inStock" id="inStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
