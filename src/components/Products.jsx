import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Products = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([])

    const add = (product) => {
        dispatch(addToCart(product))

        toast.info("Item added to Bag!", {
            theme: 'colored'
        })
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(data => data.json())
            .then(res => setProducts(res))
    }, []);

    const card = products.map(product => (
        <div key={product.id} className='col-md-3 col-6' style={{ marginBottom: '15px' }}>
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
                    <Button onClick={() => add(product)} variant="primary" className=''>Add to cart</Button>
                </Card.Footer>
                <ToastContainer position="top-center"
                    autoClose={3000}
                    closeOnClick
                    theme="light" />
            </Card>
        </div>
    ))

    return (
        <div className='row'>
            {card}
        </div>
    )
}

export default Products