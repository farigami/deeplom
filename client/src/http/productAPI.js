import { $host, $authHost } from "./index";

export const addProduct = async (product) => {
    const { data } = $authHost.post(
        '/api/product/create',
        product
    )
}

export const getProducts = async () => {
    const  data  = $host.get('/api/product/all')
    console.log(data.title, 'hi')
    return data
}