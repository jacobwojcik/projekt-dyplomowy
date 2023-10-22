export const csrUseClient = `'use client'

import { useState, useEffect } from 'react'
...`


export const fetchData = `...

const fetchProductsData = async () => {
    const res = await fetch('api/products');
    const data = await res.json();
    setProducts(data);
};

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsData();
    }, []);

    return (
        <div>
            {products}
        </div>
    )
}
`

export const fetchServerData = `const getProducts => () = {
    const res = await fetch('/api/products')
    return res.json()
  }
   
export default async function Page() {
    const data = await getData()

    return(
        <div> 
            {data} 
        </div>
    ) 
}
`

export const dynamicOptions = `export const dynamic = 'auto'
export const dynamic = 'force-dynamic'
export const dynamic = 'force-static'
export const dynamic = 'error'`

export const forceDynamic = `export const dynamic = 'force-dynamic'

export default async function Page() {...`


export const ssgOption = `export const dynamic = 'force-static'

const getProducts => () = {
    const res = await fetch('/api/products')
    return res.json()
  }
   
export default async function Page() {
    const data = await getData()

    return(
        <div> 
            {data} 
        </div>
    ) 
}`

export const isrRevalidate = `export const revalidate = 30;

const getProducts => () = {
    const res = await fetch('/api/products')
    return res.json()
  }
   
export default async function Page() {
    const data = await getData()

    return(
        <div> 
            {data} 
        </div>
    ) 
}`

export const fetchWitchRevalidate = `const data = await fetch('/api/products', { next: { revalidate: 3600 } })`