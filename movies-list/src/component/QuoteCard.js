import React from 'react';
import './QuoteCard.css';
export const QuoteCard=(props)=>{
    return(
        <div className='container'>
            <div className='div'>
            <div >
            <div className='main-div'>
            <div className='img'>
                <img src={props.img}/>
            </div>
            <div className='text-area'>
                <h2>{props.moveName}</h2>
                <span className='author-text'>{props.author}</span>
                <p>{props.type}</p>
            </div>
            </div >
            
            <p className='par'>{props.description}</p>
            </div>
            <div className='right-img'>
            <img src={props.img1}/>

            </div></div>
        </div>
    )
}