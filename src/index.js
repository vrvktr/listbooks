import React from 'react'
import ReactDom from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './Page/BookList';

const App = () => {
    return <div className="container-fluid mt-2"><BookList /></div>
}

ReactDom.render(<App />, document.querySelector('#root'))