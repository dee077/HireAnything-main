import Headers from "../components/Headers";
import Libraries from "../components/Libraries";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


function CartPage(){
    return (
        <>
            <Libraries/>
            {/* <Headers/> */}
            <Cart/>
            <Footer/>
            <Outlet/>
            
            
        </>
    )
}

export default CartPage