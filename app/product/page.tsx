"use client"
import { useRouter } from "next/navigation"
import useCart from "../(store)/store"

export default function ProducPage(props) {
    const { searchParams } = props
    const { price_id } = searchParams
    const router = useRouter()
    const product = useCart(state => state.product)

    const { cost, producInfo, name, description } = product

    if (!product?.name) {
        router.push('/')
    }
    const setCart = useCart()

    const AddToCart = () => {
        const newItem ={
            quantity:1,
            price_id: price_id
        }
        setCart
    }

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
                <div className="p-2 md:shadow">
                    <img src={producInfo.images[0]} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex md:flex-col items-center md:items-start justify-between text-xl sm:text-lg gap-2">
                        <h3 className="uppercase font-semibold">
                            {name}
                        </h3>
                        <p className="md:text-lg">${cost / 100}</p>
                    </div>
                    <p className="text-sm p-4 flex-1">
                        {description}
                    </p>
                    <button className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer p-4 ml-auto" onClick={AddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}