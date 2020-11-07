import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Table from './Table';

export default function Orders({ items }) {
  return (
    <div className="border-top">
      <Table>
        <thead>
          <tr>
            <th scope="col" colSpan="2">
              Quantity
            </th>
            <th scope="col" colSpan="2">
              Description
            </th>
            <th className="text-right" scope="col" colSpan="2">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ quantity, name, price }) => {
            return (
              <tr key={`${name}`}>
                <td colSpan="2">{quantity > 1 ? `${quantity}pcs` : `${quantity}pc`}</td>
                <td className="text-capitalize" colSpan="2">
                  {name}
                </td>
                <td className="text-right" colSpan="2">
                  ${price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
Orders.defaultProps = {
  items: [],
};
Orders.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
};
