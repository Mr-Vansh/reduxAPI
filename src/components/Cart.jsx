import { useDispatch, useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import { removeFromCart } from '../redux/cartSlice'

const Cart = () => {

  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Item removed from Bag!", {
      theme: 'colored'
    })
  }

  const card = products.map(product => (
    <div key={product.id} className='col-md-4 col-11' style={{ marginBottom: '15px' }}>
      <Card className="h-100">
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: "100px", height: '120px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-transparent'>
          <Button onClick={() => remove(product.id)} variant="danger" className=''>Remove</Button>
        </Card.Footer>
        <ToastContainer position="top-center"
          autoClose={3000}
          closeOnClick
          theme="light" />
      </Card>
    </div>
  ))

  return (
    <>
      <h2 className="mb-3 mt-3">Cart</h2>
      <hr />
      {products.length > 0 ? [card] : <h4>Your cart is empty</h4>}

    </>
  )
}

export default Cart