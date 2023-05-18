import Image from 'next/image'
import Stripe from 'stripe'
import ProductCard from './ProductCard'
async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2020-08-27'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  return res.data
}

export default async function Home() {
  const products = await getStripeProducts()
  console.log('------------------->', typeof products);

  return (
    <main className='p-4 flex flex-col justify-center items-center' >
      <div className='grid gap-4 max-w-[1000px] arid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {products?.map((product, index) => {
          return <ProductCard key={index} product={product} />
        })}
      </div>
    </main>
  )
}
