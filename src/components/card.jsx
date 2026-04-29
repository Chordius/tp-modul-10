import React from 'react'

function Card({ item }) {
    return (
        <div className="p-4 bg-sky-100 shadow rounded-lg">
            {item.title}
            {item.body}
            {
                item.image && 
                <img src={item.image} alt={item.title} className="mt-4 rounded" />
            }
        </div>
    )
}

export default Card
