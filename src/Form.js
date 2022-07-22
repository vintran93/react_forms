import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props){
        super(props)
        // gives the user this inside contructor
        // this.input = React.createRef()
        this.state = {
            title: ''
        }
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // what is default of a form upon submission? Post request
        // upon submission, call something that will send final answer to frontend to put into state, keeper of list
        // console.log(this.input.current.value)
        // gives state 

        // reach into props, props given from constructor, props handed to addNewTodo via handleOnSubmiton form
        // on form side when button is clicked, executes little handler, prevents default, gives state to handleSubmit on the parent level
        this.props.handleOnSubmit(this.state)
        this.setState({
            title: ''
        })
    }

    handleChange = (e) => {
        console.log(e.target.value) //input form value that changed
        // each time we are grabbing the value and then putting that into the state; it's adding to it
        // async setState
        // classic form; it does not refresh into the box; controlled and let's me handle state
        // console.log("state is first", this.state)
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
        <form>
            <label>New Todo Item:   </label>
            <input type='text' value={this.state.title} onChange={this.handleChange} />
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
        )
    }
}

export default Form;