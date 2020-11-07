/* eslint-disable react/style-prop-object */
import React from 'react';

// import local file
import '../style.scss';
import BillsBtn from './BillsBtn';

export default function CallToAction() {
  return (
    <div className="col-12 soon-more-action mt-4">
      <div className="d-flex justify-content-between flex-sm-row flex-column">
        <BillsBtn
          text="edit order"
          icon="bi-pencil"
          color="#007bff"
          style="btn-outline-primary d-flex align-items-center btn-lg shadow-lg col-sm-3 col-12 mb-3 "
          path={
            <path
              fillRule="evenodd"
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
            />
          }
          handleClick={() => console.log('edit button is click')}
        />
        <BillsBtn
          text="new order"
          icon="bi-plus-circle-fill"
          color="#007bff"
          style="btn-outline-primary d-flex align-items-center btn-lg shadow-lg col-sm-3 col-12 mb-3"
          path={
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
            />
          }
          handleClick={() => console.log('new button is click')}
        />
        <BillsBtn
          text="paynow"
          color="#007bff"
          icon="bi-arrow-right"
          style="btn-outline-primary d-flex align-items-center btn-lg shadow-lg  col-sm-3 col-12 mb-3"
          path={
            <>
              <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z" />
              <path
                fillRule="evenodd"
                d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"
              />
              <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </>
          }
          handleClick={() => console.log('paynow button is click')}
        />
      </div>
    </div>
  );
}
