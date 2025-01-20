'use client'
import SingleDetails from '@/components/SingleDetail'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

import { useParams } from 'next/navigation'

import React from 'react'

const page = async () => {

    const {productId}:any = useParams();
    const products = await client.fetch(groq `*[_type == "product" ]{
        id,name,price,description,imagepath,category,discountPercentage}`);
    const product = products.find((product:any)=>product.id.current == productId);
    console.log(products);

  return (
    <div>
        <SingleDetails product={product}/>
    </div>
  )
}

export default page