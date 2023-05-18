"use client"
import { useRouter } from "next/navigation"
import useCart from "./(store)/store"

const ProductCard = (props) => {
    const router = useRouter()
    const { product } = props
    const { id: price_id, unit_amount: cost, product: producInfo } = product
    const { name, description } = producInfo
    const setProduct = useCart(state => state.setProduct)
    const OnProductClick = () => {
        const newProduct = {
            name, description, cost, price_id, producInfo
        }
        setProduct(newProduct)
        router.push(`/product?price_id=${price_id}`)
    }

    return (
        <div onClick={OnProductClick} className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer">
            <img src={producInfo.images[0]} alt={name} className="w-full h-full object-cover" />
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between font-semibold uppercase">
                    <h3>{name}</h3>
                    <p>{cost / 100}$</p>
                </div>
                <div className="text-sm ">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ProductCard