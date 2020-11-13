/* eslint-disable react/require-default-props */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

// import local file
import Button from '../../../../Components/Button';
import Notification from '../../../../Components/Notification';

export default function ProductButtons({
  item,
  idAlreadyExists,
  handleViewProduct,
  handleAddProduct,
}) {
  const { name, sku } = item;

  const updateNotify = () => {
    toast.dismiss();
    toast('Your item has been updated!', {
      progressClassName: 'custom_progress',
    });
  };
  const addNotify = () => {
    toast.dismiss();
    toast(<Notification {...{ sku, name }} />, {
      progressClassName: 'custom_progress',
    });
  };
  return (
    <div className="d-flex justify-content-center products_buttons flex-sm-row flex-column">
      {idAlreadyExists ? (
        <>
          <Button
            style="col d-block w-auto btn-lg rounded-0 btn-cart btn-update-cart"
            handleClick={() => {
              handleAddProduct();
              updateNotify();
            }}
          >
            <span className="position-relative">Update cart</span>
          </Button>
          <Button
            style="col btn-cart-view d-block w-auto btn-lg rounded-0"
            handleClick={handleViewProduct}
          >
            <span className="position-relative">View cart &#8594;</span>
          </Button>
        </>
      ) : (
        <>
          <Button
            style="col d-block w-auto btn-lg mx-auto rounded-0 "
            handleClick={() => {
              handleAddProduct();
              addNotify();
            }}
          >
            <span className="position-relative">Add to Cart</span>
          </Button>
          <Button
            style="col d-block w-auto btn-lg mx-auto rounded-0 "
            // eslint-disable-next-line no-console
            handleClick={() => console.log('view details...')}
          >
            <span className="position-relative">View details &#8599;</span>
          </Button>
        </>
      )}
    </div>
  );
}
ProductButtons.defaultProps = {
  item: PropTypes.shape({
    id: 0,
    price: 0,
    quantity: 0,
    category: '',
    description: '',
    name: '',
    sku: '',
  }),
};
ProductButtons.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  idAlreadyExists: PropTypes.object,
  item: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    sku: PropTypes.string,
  }),
  handleViewProduct: PropTypes.func,
  handleAddProduct: PropTypes.func,
};
