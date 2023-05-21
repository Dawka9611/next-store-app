"use client"
import useCart from "@/app/(store)/store"
import Link from "next/link"
import Modal from "./Modal"

const Header = () => {
    const cartItems = useCart(state => state.cart)
    const openModal = useCart(state => state.openModal)
    const setOpenModal = useCart(state => state.setOpenModal)


    return (
        <header className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between'>
            {openModal && <div>
                <Modal />
            </div>}
            <Link href={'/'}>
                <h1 className='uppercase cursor-pointer hover:scale-110 '>
                    Friut Store
                </h1>
            </Link>
            <div className="relative grid place-items-center cursor-pointer group" onClick={setOpenModal}>
                {cartItems?.length > 0 ?
                    <div className=" absolute top-0 right-0 px-1 bg-red-500 text-white rounded-full">
                        <p className="text-sm">{cartItems?.length}</p>
                    </div>
                    : ""
                }
                <i className="fa-sharp fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500"></i>
            </div>
        </header>
    )
}

export default Header