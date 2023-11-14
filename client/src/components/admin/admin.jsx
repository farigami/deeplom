import { useState, useContext, useEffect } from 'react'
import './admin.scss'
import Table from 'react-bootstrap/Table';
import { getCategory } from '../../http/categoryAPI';
import CreateCategory from '../modals/category-modal';
import CreateProduct from '../modals/product-modal';
import { getProducts } from '../../http/productAPI';

const Admin = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    useEffect(() => {
        getCategory().then(data => {
            setCategories(data)
        })
        getProducts().then(({ data }) => {
            console.log(data)
            setProducts(data)
        })
    }, [])
    return (
        <>
            <div className='admin'>
                <div className='admin__panel'><h1>Категории</h1><button onClick={() => setCategoryVisible(true)}>Добавить категорию</button></div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Категория</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length ? categories.map(category =>
                            <>
                                <tr key={category.id}>
                                    <td key={category.id}>{category.id}</td>
                                    <td key={category.title}>{category.title}</td>
                                </tr>
                            </>
                        ) : null}

                    </tbody>
                </Table>
                <div className='admin__panel'><h1>Товары</h1><button onClick={() => setProductVisible(true)}>Добавить товар</button></div>
                <Table striped bordered hover  >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Изображение</th>
                            <th>Название</th>
                            <th>Описание</th>
                            <th>Кол-во</th>
                            <th>Категория</th>
                            <th>Старая цена</th>
                            <th>Цена</th>
                            <th>Скидка</th>
                            <th>Хит</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length ? products.map(product =>
                            <>
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td><img src={process.env.REACT_APP_API_URL + product.image} width='150' height='150'></img></td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.amount}</td>
                                    <td>{categories.map(category =>
                                        category.id === product.categoryId ?
                                        category.title
                                            : null
                                    )}</td>
                                    <td>{product.old_price}</td>
                                    <td>{product.price}</td>
                                    <td>{product.sale ? 'СКИДКА' : null}</td>
                                    <td>{product.hit ? 'ХИТ' : null}</td>
                                </tr>
                            </>
                        ) : null}

                    </tbody>
                </Table>
            </div>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
        </>
    )
}

export default Admin