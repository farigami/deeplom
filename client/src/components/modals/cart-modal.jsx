import { observer } from "mobx-react-lite"
import { Context } from "../../index"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import './cart-modal.scss'
const CartModal = observer((props) => {
  const handleClose = () => props.onhide()
  const { user } = useContext(Context)
  return (
    <Modal {...props} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Корзина
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Изображение</th>
              <th>Название</th>
              <th>Кол-во</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Link className="OrderButton">Оформить заказ</Link>
      </Modal.Footer>
    </Modal>
  )
})

export default CartModal