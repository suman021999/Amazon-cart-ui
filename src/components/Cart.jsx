import React from 'react'

export const Cart = ({id,img,title,author,price})=>{

        const handltitle=()=>{
          console.log(title)
        }
        const handlauthor=()=>{
          console.log(author)
        }
        const handlprice=()=>{
          console.log(price)
        }

    return (
        <>
            <div className="border-[1px] border-[#778da9]" key={id}>
              <p className="bg-red-500 w-10 text-white  id">#{id}</p>
              <div className="flex items-center justify-center">
                <img className="h-36 w-36" src={img} />
              </div>
              <h1 className="overflow-hidden title px-2 cursor-pointer text-[#007185] mt-4" onClick={handltitle}>
                {title}
              </h1>
              <h3 className="overflow-hidden title px-2 cursor-pointer font-semibold text-[#444894]" onClick={handlauthor}>
                {author}
              </h3>
              <h3 className="overflow-hidden  px-2 cursor-pointer pb-3 text-red-600" onClick={handlprice}>
                {price}
              </h3>
            </div>
        </>
    )
}