import React from 'react'
import books from "./booksData" ;
import BookCard from "./components/BookCard" ;
import {useNavigate} from "react-router-dom" ;
const Home = () => {
  const navigate = useNavigate() ;
  return (
    <div>
      <h2>Books Library !</h2>
      <button onClick={()=>(navigate("/add-book"))}>ADD Book !</button>
      {books.map((book)=>(<BookCard key={book.id} data={book}/>))}
    </div>
  )
}

export default Home
