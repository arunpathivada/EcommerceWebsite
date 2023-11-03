import { useEffect, useState } from "react";
import "./widgetLg.css";
import { publicRequest } from "../../requestMethods";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  const [orders,setOrders]= useState([]);
  useEffect(()=>{
    const getProducts = async()=>{
      try{
      const res=await publicRequest.get("/orders");
      setOrders(res.data);
      console.log(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getProducts();
  },[])
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th> 
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order)=>(                     
        <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <img
              src={order.img || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAY1BMVEX///8AAADq6uoZGRmAgIDHx8fExMSzs7P6+vrw8PDPz89lZWX29vZsbGxXV1fa2toqKiqJiYmTk5Onp6cUFBQ2NjY/Pz+tra3k5OQdHR0kJCSdnZ1FRUVSUlJLS0sODg51dXXTuEymAAADMUlEQVR4nO2b2ZaqMBBFBZnnQRBEhP//yk4l4G0FkoCJD33rPLQLTcKmUhPYnk4oFAqFQqFUySyMs7Qud0cjitdlxj6FgSaUqNtJwnBSHShlRRfvB/IntgTKYXBN7TjEpmqWa01RKvcUkpercDxwBE3OrJP7Ckkip6WLPlxyEMDVilaHHe3Jq2kxnKJRxWL3dMGLG8GRl8C18mf4sJcslNKQTs4KTwWKw1Buz60B0xj8KInJiGQ+e8Bwhu5jnCBhvtJF/96ji/NWLmHAryiaF7lG23PESuNpy198xLxByHJmwRTr5S2XheLjeBZM2Qa1xfsHNl14y4ldml7eLec+2G4fy4LNZJV8JRBo+qtW1/VoOGfL3BK5F7pesh8ntbZRZhrDWhqH7ccKC3CWDCfeh9MwlGHcTA9XOuD8yupPSSDZmhYV2d4a4eWTQXlTnIGZLn6GSFDcp3LECZo5C64YdXV4MZ1FlDRHY1aSd2M1H1SCiPFnHHHJirpK2s2m9PGithBf8pQwsoKfdvzJxRLJfBDkwwtKUsqltYDhDCWPnFmw3+HtXtqFyaOu6z603B3FOWVWHTlDHLCes7uG+KZp7s70NviDyxnQZPzPlQoKLjfEQ27RUauOU1KoIKy/BUO8JuYOgIKrq6F/FzlVKRwh6OJUKRW5DE2ri+qvR53YI0gzclbWPHM1imMlPc+dtGb5d6HLnE61yMcVCVxGeNXEeu03YNytFuy3hHlRkUipvAsHmaRud1+AaWVyiBfza6kiNXLZFeJf5Y36uuB+RuLpxHcqAimCvUzXYbzfDmoQPD2QKjvEaR66YXxBY/UUafduuoMbEohU1Ulb/e1eLts3wX6OWlFoYyXZUUpjH5ZZSRtff0Ww5dOHZ+iuCKVh1LIPZOPlbashU/HX5KyvJd+nlOvz7SMw9gbM4nHYloIvwEg7pecuVH4CUy7XEz9j58g/6jMAo7oJMD+BUf1NBsIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgDMIgzF+DOfRPloEmmFD0I9c1hZpgDuuPw8j/aPxdymFQKBQKhfov9QPG3yMXLB0LDAAAAABJRU5ErkJggg=="}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{new Date(order.createdAt).toLocaleDateString()}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
         ))}
      </table>
    </div>
  );
}
