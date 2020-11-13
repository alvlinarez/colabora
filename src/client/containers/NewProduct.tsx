import React from 'react';
import '../styles/containers/newProduct.scss';

const NewProduct = () => {
  return (
    <div>
      <div>
        <h1>New Product</h1>
      </div>

      <div className="formContainer">
        <form>
          <fieldset>
            <legend>General Information</legend>
            <div className="formDiv">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Product Name"
              />
            </div>
            <div className="formDiv">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" name="image" />
            </div>
          </fieldset>
          <fieldset>
            <legend>About Your Product</legend>
            <div className="formDiv">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" />
            </div>
          </fieldset>
          <button type="submit" className="formButton">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
