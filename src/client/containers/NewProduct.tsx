import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ProductContext } from '../context/ProductContext';
import '../styles/containers/newProduct.scss';

const NewProduct: React.FC = () => {
  const history = useHistory();
  const productContext = useContext(ProductContext);
  const { products, getProducts, createProduct, productError } = productContext;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileError, setSelectedFileError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      sku: ''
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      description: yup.string().required(),
      sku: yup.string().required()
    }),
    onSubmit: (values) => {
      // Verify if image is not empty
      if (!selectedFile) {
        setSelectedFileError(true);
        return;
      }
      setSelectedFileError(false);
      const formData = new FormData();
      formData.append('productImage', selectedFile, selectedFile.name);
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('sku', values.sku);
      createProduct(formData, history);
    }
  });
  return (
    <div>
      <div>
        <h1>New Product</h1>
      </div>

      <div className="formContainer">
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend>General Information</legend>
            <div className="formDiv">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Product Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
            <div className="formDiv">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                onChange={(e) => setSelectedFile(e.target.files![0])}
              />
            </div>
            {selectedFileError && (
              <div className="error">Image is required</div>
            )}
          </fieldset>
          <fieldset>
            <legend>About Your Product</legend>
            <div className="formDiv">
              <label htmlFor="name">SKU</label>
              <input
                type="text"
                id="sku"
                name="sku"
                placeholder="SKU"
                value={formik.values.sku}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.sku && formik.errors.sku && (
              <div className="error">{formik.errors.sku}</div>
            )}
            <div className="formDiv">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.description && formik.errors.description && (
              <div className="error">{formik.errors.description}</div>
            )}
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
