import React from 'react'

import './QuoteScreen.css'

import { QuoteCard } from '../component/QuoteCard'
export const QuoteScreen=()=>{
    const quotData=[{
        "desc":"The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.",
        "author":"2023 Adam Scott",
        "IMAge":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSFaj4B12Cphga9L_do4BYInlj4CB1nk4iQ&usqp=CAU",
        "moveName":"Animal",
        "IMAge1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CTJ6Y5seRVyJQjEK0qOxD7RsCZFrVIY2NA&usqp=CAU",
        "Type":"3har action , crime"
    },
    {
        "desc":"tells the story of a coolie Pushparaaj who is denied a surname because of his bastard status",
        "author":"2021 Sukumar",
        "IMAge":"https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
        "moveName":"Pushpa",
        "IMAge1":"https://i.ytimg.com/vi/Gs9TQr1D9Ps/hqdefault.jpg",
        "Type":"3har action , crime"
    },
    {
        "desc":"Stream Tanhaji full movie online in HD quality on Hotstar CA. It is a 2020 Hindi Drama film directed by Om Raut.",
        "author":"2020 	Prakash Kapadia",
        "IMAge":"https://qph.cf2.quoracdn.net/main-qimg-8f3e9732d0fd869fe1aaa4d0b01c8760-lq",
        "moveName":"Tanhaji",
        "IMAge1":"https://i.ytimg.com/vi/ks-29EYIGU4/sddefault.jpg",
        "Type":"3har action "
    }


]
    return(
        <>
       
        <div className='quot-section'>
            {
                quotData.map((elem,index)=>{
                    return(
                        <QuoteCard description={elem.desc}
                        author={elem.author}
                        moveName={elem.moveName}
                        img={elem.IMAge}
                        type={elem.Type}
                        img1={elem.IMAge1}
                        key={index}
                       />

                    )
                })
            }
            
       
        

        </div>
        
        </>
    )
}