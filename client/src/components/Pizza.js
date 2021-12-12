import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/ActionCreators';

function Pizza({pizza}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [showModal, setShowModal] = useState(false);
  const inputQuantity = useRef(null);
  const inputVarient = useRef(null);

  const onChangeVarient = () => {
    setVarient(inputVarient.current.value);
  };

  const onChangeQuantity = () => {
    setQuantity(inputQuantity.current.value);
  };

  const onAddToCart = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="m-3 shadow p-3 mb-5 bg-body rounded">
      <div onClick={toggleModal}>
        <H1>{pizza.name}</H1>
        <Img src={pizza.image} alt={pizza.name} className="img-fluid" />
      </div>
      <div className="d-flex">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-select"
            name="varient"
            id="varient"
            ref={inputVarient}
            onChange={onChangeVarient}
          >
            {pizza.varients.map((varient, indx) => (
              <option key={indx} value={varient}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-select"
            name="quantity"
            id="quantity"
            ref={inputQuantity}
            onChange={onChangeQuantity}
          >
            {[...Array(10).keys()].map((a, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex">
        <div className="m-1 w-100">
          <Price>Price: {pizza.prices[0][varient] * quantity} BDT</Price>
        </div>
        <div className="m-1 w-100">
          <button onClick={onAddToCart} className="btn btn-danger">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-0 m-0">
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="w-100 d-flex justify-content-center mb-3">
              <Img className="img-fluid" src={pizza.image} alt={pizza.name} />
            </div>
            <p>{pizza.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={toggleModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const Price = styled.p`
  margin: 0.4rem 0 auto 0;
  font-weight: bold;
  font-size: 1.1rem;
`;

export default Pizza;
