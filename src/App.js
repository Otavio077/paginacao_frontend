import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import './App.css'
import Books from './components/Books'
import Pagination from './components/Pagination'

function App() {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalBooks, setTotalBooks] = useState()
  const [totalPages, setTotalPages] = useState()
  const [firstShowing, setFirstShowing] = useState()
  const [lastShowing, setLastShowing] = useState()

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:3000/books?page='+currentPage+'&limit=10')
      setBooks(res.data.results)
      setTotalBooks(res.data.total.books)
      setTotalPages(res.data.total.pages)
      setFirstShowing(res.data.showing.first)
      setLastShowing(res.data.showing.last)
    }
    fetchBooks()
    /*
    console.log(totalBooks)
    console.log(totalPages)
    console.log(currentPage)
    console.log(books)
    */
  }, [currentPage])


  function handlePageChange(value){
    if(value === '&laquo;' || value === "... "){
      setCurrentPage(1)
    } else if (value === '&lsaquo;'){
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
    } else if (value === '&rsaquo;'){
      if (currentPage !== totalPages) {
        setCurrentPage(currentPage + 1)
      }
    } else if(value === '&raquo;' || value === " ..."){
      setCurrentPage(totalPages)
    } else {
      setCurrentPage(value)
    }
    /*
    console.log(value)
    console.log(currentPage)
    */
  }
  
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Catálogo de Livros</h1>
      <Books books={books} />
      <div>Mostrando de {firstShowing} até {lastShowing} de {totalBooks} livros</div>
      <div className="footer fixed-bottom">
        <Pagination totalPage={totalPages} page={currentPage} limit={10} siblings={1} onPageChange={handlePageChange}/>
      </div>
    </div>
  );
}

export default App;
