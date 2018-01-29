import React, { Component } from 'react';
// import logo from './logo.svg';
import './Post.css';
import Comment from './Comment.js'

class Post extends Component {
  constructor (props) {
    super()
    this.state = {
      title: "My initial blog title",
      author: "My initial blog author",
      body: "My initial blog post body",
      comments: ["My first comments at first", "My second comment at first", "My third comment at first"]
    }
  }
  handleClick (e) {
    this.setState({
      body: prompt("update blog post", this.state.body)
    })
  }

  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">{this.state.title}</h1>
          <h4>Written by {this.state.author}</h4>
        </header>
        <article className="Post-body">
          <p>{this.state.body}
          </p>
          <h3>Comments:</h3>
          {this.state.comments.map((comment) => {
            return <Comment body={comment} />
          })}
        </article>
        <button onClick={(e) => this.handleClick(e)}>Update Post?</button>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default Post;
