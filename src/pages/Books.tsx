import React from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../store/slices/data";

const Books = () => {
  const books = useSelector(getBooks);

  const displayBooks = (book: string) => {
    return (
      <div key={Math.random().toString()} className="book">
        {book}
      </div>
    );
  };

  return <div className="books">{[...books, ...books].map(displayBooks)}</div>;
};

export default Books;
