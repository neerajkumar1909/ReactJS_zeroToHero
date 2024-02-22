import React, { Component } from 'react'
import axios from 'axios'

class PostHTTP extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        // console.log({ [e.target.name]: e.target.value })
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        // axios
        //     .post('https://jsonplaceholder.typicode.com/posts', this.state)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <h1>Post Form from Axios</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text'
                            placeholder='userId'
                            name='userId'
                            value={userId}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type='text'
                            placeholder='title'
                            name='title'
                            value={title}
                            onChange={this.changeHandler}>

                        </input>
                    </div>
                    <div>
                        <input type='text'
                            placeholder='body'
                            name='body'
                            value={body}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostHTTP
