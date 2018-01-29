import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Post title={"My Blog Title"} author={"My Blog Author"} body={"My fascinating blog post body"} comments={["my first comment","my second comment","my third comment"]}/>, document.getElementById('root'));
registerServiceWorker();
