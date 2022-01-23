import React, {useState, useEffect} from 'react';
import Localization from '../../common/Localization';
import CartImage from './CartImage';

function Header({productData, removeItem}) {
  const [noOfItems, setNoOfItems] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems((productData && Array.isArray(productData)) ? productData : []);
    setNoOfItems((productData && Array.isArray(productData)) ? productData.length : 0);
    let price = 0;
    if(productData && Array.isArray(productData) && productData.length>0){
      productData.forEach((product) => {
        if(product.qty){
          price += product.qty*parseInt(product.price);
        } else {
          price += parseInt(product.price);
        }
      });
      setTotalProductPrice(price);
    } else {
      setTotalProductPrice(0);
      document.getElementById('myPopup').classList.remove("show");
    }
  }, [productData]);

  const showMiniCart = () => {
    if(cartItems && Array.isArray(cartItems) && cartItems.length > 0){
      document.getElementById('myPopup').classList.toggle("show");
    }
  }

  return (
    <div className="headerContainer">
      <div className="cartIconContainer" onClick={() => showMiniCart()}>
        <CartImage />
      </div>
      <div className="cartItemContainer">
        <div className="productPrice">${totalProductPrice}</div>
        <div className="productQtyWrapper">
          <div className="productQty">{`${noOfItems} ${Localization.ITEMS_TEXT}`}</div>
          <div className="arrow-down" onClick={() => showMiniCart()}></div>
          <div className="popuptext" id="myPopup">
            {(cartItems && Array.isArray(cartItems) && cartItems.length > 0) &&
              <React.Fragment>
                {cartItems.map((productInfo, index) => {
                  return (
                    <div className="productListRow" key={index}>
                      <div className="productDeleteIcon" onClick={() => removeItem(productInfo.id)}>
                        X
                      </div>
                      <div className="productInfo">
                        <p className="productName">{productInfo.title}</p>
                        <p className="productPrice">{productInfo.currency}{productInfo.price}</p>
                      </div>
                      <div className="productQty">
                        Qty {productInfo.qty ? productInfo.qty : 1}
                      </div>
                    </div>
                  )
                })}
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
