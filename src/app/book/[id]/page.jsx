import { getBookDetails } from '@/lib/data';
import React from 'react'

const BookDetailsPage = async ({params}) => {
const {id} = await params;
  const book = await getBookDetails(id)
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={book.image_url} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{book.title}</h1>
          <h2 className="text-2xl mt-3 mb-3">by {book.author}</h2>
          <p className="py-6">{book.description}</p>
          <p className="text-2xl">Category: {book.category}</p>
          <p className="text-2xl">
            Available Copies: {book.available_quantity}
          </p>
          <div className="flex ">
            <button className="btn btn-primary">BORROW THIS BOOK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage