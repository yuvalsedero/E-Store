import Container from '@/app/components/Container'
import { products } from '@/app/utils/products'
import React from 'react'
import ProductDetails from './ProductDetails'
import ListRating from './ListRating'

interface IParams {
	productid?: string
}

const Product = ({ params }: { params: IParams }) => {

	const product = products.find((item) => item.id === params.productid)

	return (
		<div className='p-8'>
			<Container>
				<ProductDetails product={product} />
				<div className='flex flex-col mt-20 gap-4'>
					<div>Add Rating</div>
					<ListRating product={product} key={null} />
				</div>
			</Container>
		</div>
	)
}

export default Product