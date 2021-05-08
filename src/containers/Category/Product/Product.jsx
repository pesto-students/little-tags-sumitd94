import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from './Product.module.css';

const Product = ({ product, categoryname }) => (
  <div className={classNames.productContainer}>
    <div className={classNames.imageContainer}>
      <Link to={`/product/${categoryname}/${product.id}`} className={classNames.linkNoStyle}>
        <img src={`/images/${product.image[0]}`} alt={product.title} />
      </Link>
    </div>
    <div className={classNames.productDetailsContainer}>
      <div className={classNames.titleContainer}>
        <h3 className={classNames.title}>
          <Link to={`/product/${categoryname}/${product.id}`} className={classNames.linkNoStyle}>
            {product.title}
          </Link>
        </h3>
      </div>
      <div className={classNames.productDescription}>
        <p className={classNames.brand}>HRX</p>
        <p className={classNames.price}>
          $
          {product.price}
          <span className={classNames.discount}>
            {' '}
            (50% OFF)
          </span>
        </p>
        <div className={classNames.ratingBadge}>
          <span className={classNames.badgeNumber}>
            5
          </span>
          <span className={classNames.badgeStar}>
            <i className="fas fa-star" />
          </span>
          <span className={classNames.badgeNumber}>|</span>
          <span className={classNames.badgeNumber}>
            15
          </span>
        </div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  categoryname: PropTypes.string.isRequired,
};

export default Product;
