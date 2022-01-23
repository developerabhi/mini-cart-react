import React, {useState, useEffect} from 'react';
import Localization from '../../common/Localization';
import {getCartProductData} from '../../services/productServices';
import {setLocalStorageData, getLocalStorageData} from '../../utility/localStorage';
import Loader from '../Shared/Loader';
import Header from '../Shared/Header';
import CartImage from '../Shared/CartImage';
import ProductListItem from './Molecules/ProductListItem';
import '../styles/css/productList.css';

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const fetchData = () => {
    setShowLoader(true);

    getCartProductData()
    .then(res => {
      setShowLoader(false);
      if(res.status >= 200 && res.status < 300){
        setCartItems(res.data.products);
        setLocalStorageData('cartProducts', res.data.products);
      } else {
        throw res;
      }
    }).catch(error => {
      setShowLoader(false);
      setCartItems(false);
    });
  }

  useEffect(() => {
    if(!getLocalStorageData('cartProducts')){
      fetchData();
    } else {
      setCartItems(getLocalStorageData('cartProducts'));
    }
  }, []);

  const increaseQty = (pid) => {
    let cartQty;
    let cartItems = getLocalStorageData('cartProducts');
    let objIndex = cartItems.findIndex((obj => obj.id == pid));
    let product = cartItems[objIndex];
    if(product && product.qty){
      cartQty = product.qty+1;
    } else {
      cartQty=2;
    }
    product = {...product, qty: cartQty};
    cartItems[objIndex] = product;
    setCartItems(cartItems);
    setLocalStorageData('cartProducts', cartItems);
  }

  const decreaseQty = (pid) => {
    let cartQty;
    let cartItems = getLocalStorageData('cartProducts');
    let objIndex = cartItems.findIndex((obj => obj.id == pid));
    let product = cartItems[objIndex];
    if(product && product.qty && product.qty > 1){
      cartQty = product.qty-1;
    } else {
      cartQty=1;
    }
    product = {...product, qty: cartQty};
    cartItems[objIndex] = product;
    setCartItems(cartItems);
    setLocalStorageData('cartProducts', cartItems);
  }

  const removeItem = (pid) => {
    let cartItems = getLocalStorageData('cartProducts');
    let updatedCartItems = cartItems.filter(item => item.id !== pid);
    setCartItems(updatedCartItems);
    setLocalStorageData('cartProducts', updatedCartItems);
  }

  return (
    <div className="wrapper">
      {(showLoader) && <Loader />}

      <div className="container-fluid">
        <Header productData={cartItems} removeItem={removeItem}/>

        {(cartItems && cartItems.length > 0) ?
          <ProductListItem productData={cartItems} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
          :
          <div className="noProductAvailable">
            <CartImage />
            <p>{Localization.NO_PRODUCT_AVAILABLE_TEXT}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductList;
