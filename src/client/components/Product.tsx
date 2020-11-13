import React from 'react';
import { isYesterday, isToday, format } from 'date-fns';
import '../styles/components/product.scss';

interface ProductProps {
  product?: any;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
  const { name, description, url, sku, createdAt } = product;

  const formatDate: any = () => {
    if (isYesterday(new Date(createdAt))) {
      return 'Created yesterday';
    }
    if (isToday(new Date(createdAt))) {
      return 'Created at ' + format(new Date(createdAt), 'p').toLowerCase();
    }
    return 'Created on ' + format(new Date(createdAt), 'MMM d');
  };

  return (
    <div className="productCard">
      <div className="productImage">
        <img src={url} alt={`Image - ${name}`} />
      </div>
      <div className="productBody">
        <div className="productName">{name}</div>
        <div className="productDescription">{description}</div>
        <div className="productSku">{sku}</div>
      </div>
      <div className="productDate">
        <div className="productDateText">{formatDate()}</div>
      </div>
    </div>
  );
};

export default Product;
