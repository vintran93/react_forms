import React, { Component } from 'react'
import Item from './Item';
import Form from './Form';

class List extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            list: [
                // {id: 1, title: 'Do the dishes'},
                // {id: 2, title: 'Do the laundry'}
            ]
        }
    }

    handleDelete = (id) => {
        console.log(id)
        this.setState((prevState) => {
            const newState = prevState.list.filter(item => item.id !== id)
            return {
                list: newState
            }
        })
    }

    addNewTodo = (data) => {
        console.log(data)
        // pretend it is talking to backend
        const newTodo = {
            id: this.state.list.length + 1,
            title: data.title
        }
        this.setState(prevState => ({
            list: [...prevState.list, newTodo]
        }))
        // fetch('the url', {
        //     method: 'POST',
        //     body: newTodo stringified
        // })
        // .then(res => res.json())
        // .then(backendData => {
        //     this.setState(prevState => ({
        //         list: [...prevState.list, backendData]
        //     }))
        // })
        
    }

    render(){
        const {list} = this.state
        const itemList = list.map(item => {
            return <Item key={item.id} item={item} handleDelete={this.handleDelete} />
        })

        return(
            <div>
                <Form handleOnSubmit={this.addNewTodo}/>
                {/* Any key put into component is available in props key value pair; key will be handleOnSubmit in props of form
                Its value will be the function that lives in addNewTodo */}
                <hr/>
                {itemList}
            </div>
        )
    }
}

export default List;