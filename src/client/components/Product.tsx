import React from 'react';
import '../styles/components/product.scss';

interface ProductProps {
  product?: any;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
  return (
    <div className="productCard">
      <div className="productImage">
        <img
          src="https://colabora-pe-10.s3.amazonaws.com/productImage/1605222744782-asumare.png"
          alt={'Image'}
        />
      </div>
      <div className="productBody">
        <div className="productName">Name</div>
        <div className="productDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
          animi, delectus dicta, doloremque dolores excepturi explicabo
          inventore molestias nesciunt perspiciatis recusandae similique totam!
          Distinctio inventore reiciendis repellendus voluptatem voluptatum.
        </div>
        <div className="productSku">Sku</div>
      </div>
      <div className="productDate">
        <div className="productDateText">2 days ago</div>
      </div>
    </div>
  );
};

export default Product;
