import React from 'react'
import { useState, useEffect } from 'react'

const Card = () => {

    const [res, setres] = useState()

    async function fetchData() {
        let data = await fetch('https://dummyjson.com/products')
        let res = await data.json()
        setres(res.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {res ? (
                res.map((e) => (
                    <div key={e.id} className='mx-10 my-[12px] mb-[60px] w-[250px] p-4 rounded-xl text-center shadow shadow-lightWhite cursor-pointer transition-all hover:shadow-md hover:shadow-lightWhite'>
                        <img className='w-[222px] h-[174px] rounded-xl mb-2' src={e.thumbnail} alt="" />
                        <div className="flex flex-col gap-[12px]">
                            <h3 className='font-bold text-[20px]'>{e.title}</h3>
                            <p className='text-[12px]'>{e.description}</p>
                            <h3 className='font-bold text-[20px]'>$ {e.price}/-</h3>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Card
