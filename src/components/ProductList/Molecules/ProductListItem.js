import React from 'react';

function ProductListItem({productData, increaseQty, decreaseQty}) {
  return (
    <div className="productListWrapper">
      <div className="productListContainer">
        {(productData && Array.isArray(productData) && productData.length > 0) &&
          <React.Fragment>
            {productData.map((productInfo, index) => {
              return (
                <div className="productListRow" key={index}>
                  <div className="productImg">
                    <img src={`/assets/images${productInfo.image}`}/>
                  </div>
                  <div className="productInfo">
                    <p className="productName">{productInfo.title}</p>
                    <p className="productDesc">{productInfo.desc}</p>
                  </div>
                  <div className="productQty">
                    <div className="decreaseItem" onClick={() => decreaseQty(productInfo.id)}>-</div>
                    <div className="inputBox"><input type="textbox" name="qty" value={productInfo.qty ? productInfo.qty : 1} readOnly/></div>
                    <div className="increaseItem" onClick={() => increaseQty(productInfo.id)}>+</div>
                  </div>
                  <div className="productPrice">
                    {productInfo.currency}{productInfo.price}
                  </div>
                </div>
              )
            })}
          </React.Fragment>
        }
      </div>
    </div>
  )
}

export default ProductListItem;
