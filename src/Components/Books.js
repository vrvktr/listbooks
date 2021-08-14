import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import SliderArrow from '../assets/slider_arrow.png'
const Books = (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 1;

    return (
        <div>
            <div style={{ padding: `0 ${chevronWidth}px`, height: "auto" }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={4}
                    gutter={22}
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<img src={SliderArrow} />}
                    outsideChevron={true}
                    chevronWidth={chevronWidth}
                >
                    {props.listOfBooks.map((book) => (
                        <div className="image-container sliderImage" onClick={() => props.handleSelectedBook(book)} style={{ backgroundImage: `url(${book.book_image})` }}>
                            <div class="text-end"><span className="rating">{`${book.rating} out of 5`}</span></div>
                          
                        </div>
                    ))}


                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Books
