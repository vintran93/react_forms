import React from 'react'
// import { TomatoButton } from './Styles';

const Item = ({item, handleOnDelete}) => {
    
    
    const onDelete = () => {
        handleOnDelete(item.id)
    }
    
    return (
        <div>
            <button onClick={onDelete} >X</button>
            {item.title}
        </div>
    )
}

export default Item