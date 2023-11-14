import Admin from "../components/admin/admin"
import SignIn from "../components/auth/signin"
import SignUp from "../components/auth/signup"
import Products from "../components/products/products"
import { 
    SIGNIN_ROUTE,
    SIGNUP_ROUTE,
    PRODUCT_ROUTE,
    PRODUCTS_ROUTE,
    ADMIN_ROUTE
} from "../utils/consts"

export const authRoutes = [
    {
        path: SIGNIN_ROUTE,
        Component: SignIn
    },
    {
        path: SIGNUP_ROUTE,
        Component: SignUp
    }
]

export const publicRoutes = [
    {
        path: PRODUCTS_ROUTE,
        Component: Products
    },
   
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]