
import React, { useState } from 'react'
import BookDetails from '../Components/BookDetails';
import Books from '../Components/Books';
import Description from '../Components/Description';
import Header from '../Components/Header'
import './BookList.css';
const books = require('../books.json');
const BookList = (props) => {
    console.log(books);
    const [isBook, setBook] = useState(books.results.books);
    const [isSelectedBook, setSelectedBook] = useState();

    const handleSelectedBook = (book) => {
        console.log(book);
        setSelectedBook(book);
    }
    const closeSelected=()=>{
        setSelectedBook("")
    }
    return (
        <>
            <Header />
            <Description />
            <div className="py-3 Book-category-title">
                Hardcover Fiction
                <Books listOfBooks={isBook} handleSelectedBook={handleSelectedBook} />
            </div>
            <div>
                {isSelectedBook && (
                    <BookDetails book={isSelectedBook} closeSelected={closeSelected} />
                )}
            </div>
        </>
    )
}

export default BookList;