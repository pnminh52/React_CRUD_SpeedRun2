import React from "react";
import { Link } from "react-router-dom";
const List = (props) => {
  const { products, onHandleRemove } = props;
  return (
    <>
      <a href="/products/add">Add product</a>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>price</td>
            <td>des</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => onHandleRemove(product.id)}>
                    Xoa
                  </button>
                  <Link to={`/products/${product.id}/update`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
