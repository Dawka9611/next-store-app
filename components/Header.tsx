"use client"
import useCart from "@/app/(store)/store"
import Link from "next/link"

const Header = () => {
    const cartItems = useCart(state => state.cart)
    return (
        <header className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between'>
            <Link href={'/'}>
                <h1 className='uppercase cursor-pointer hover:scale-110 '>
                    Friut Store
                </h1>
            </Link>
            <div className="relative grid place-items-center">
                <i className="fa-sharp fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500"></i>
            </div>
        </header>
    )
}

export default Header