import React from 'react'
const Card = ({icon,title,count}) => {
  return (
    <div className='home_card'>
       {icon}
        <h2 className='font-bold'>{count}</h2>
        <p className='text-xs font-bold'> {title}</p>
    </div>
  )
}

export default Card