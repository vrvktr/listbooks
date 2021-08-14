import React from 'react'

const BookDetails = (props) => {
    return (
        <div className="row">
            <div className="col-4">
                <span className="book-name">{props.book.title}</span>
                <div className="my-5">
                    <img src={props.book.book_image} className="Book-image" alt={props.book.book_image} />
                    <div className="py-3">
                        <button className="btn btn-dark">Add to favourites +</button>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <div className="book-author">{props.book.author}</div>
                        <div className="book-publisher py-3">{props.book.publisher}</div>
                        <div className="book-description ps-0">{props.book.description}</div>
                    </div>
                </div>

            </div>
            <div className="col-2 text-end">
                <button className="btn" onClick={() => props.closeSelected()}><i class="fa fa-times" aria-hidden="true" style={{ color: 'white', fontSize: "30px" }}></i></button>

            </div>
        </div>
    )
}

export default BookDetails
