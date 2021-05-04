/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from './Cart.module.css';
import Button from '../../components/UI/Button/Button';
import cartActions from '../../store/Cart/Actions';

const Cart = ({ history }) => {
  const cartDetails = useSelector((state) => state.cart.allCarts);
  const { userAddress } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  console.log(cartDetails);

  const increaseQuantity = (product, index) => {
    const updatedCart = [...cartDetails];
    const updatedQty = product.quantity + 1;
    updatedCart[index].quantity = updatedQty;
    dispatch(cartActions.updateCart(updatedCart));
  };

  const decreaseQuantity = (product, index) => {
    const updatedCart = [...cartDetails];
    const updatedQty = product.quantity - 1;
    updatedCart[index].quantity = updatedQty;
    dispatch(cartActions.updateCart(updatedCart));
  };

  const proceedHandler = () => {
    if (userAddress.length > 0) {
      history.push('/checkout');
    } else {
      // render to add an address
      history.push('/new-address');
    }
  };

  return (
    <>
      <div className={classNames.productLists}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {cartDetails.length > 0 && cartDetails.map((product, index) => (
            <li key={product.productid}>
              <div className={classNames.productContainer}>
                <img src={`/images/${product.productData[0].image[0]}`} alt={product.productData[0].title} />
                <div className={classNames.productDetails}>
                  <p>{product.productData[0].title}</p>
                  <div className={classNames.quantityContainer}>
                    <div
                      className={classNames.valueBtn}
                      id={classNames.decrease}
                      onClick={() => decreaseQuantity(product, index)}
                    >
                      -
                    </div>
                    <input className={classNames.number} type="number" value={product.quantity} />
                    <div
                      className={classNames.valueBtn}
                      id={classNames.increase}
                      onClick={() => increaseQuantity(product, index)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <p className={classNames.price}>
                  $
                  {' '}
                  {product.productData[0].price * product.quantity}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {
        cartDetails.length > 0 ?
          <Button text="Proceed" clickHandler={proceedHandler} />
          :
          (
            <div>
              <p>Oops! No Items in Your Cart!</p>
            </div>
          )
        }
      </div>
    </>
  );
};

Cart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Cart);
