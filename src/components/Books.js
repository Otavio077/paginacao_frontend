import React from "react";

const Books = ({ books, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <ul className="list-group mb-4">
          <li className="list-group-item">
            <div className="row">
              <div className="col-4"><strong>Título</strong></div>
              <div className="col-2"><strong>Autor</strong></div>
              <div className="col"><strong>ISBN</strong></div>
              <div className="col"><strong>Páginas</strong></div>
              <div className="col"><strong>Ano</strong></div>
              <div className="col"><strong>Valor (R$)</strong></div>
            </div>
          </li>
          {books.map(book => (
            <li key={book._id} className="list-group-item">
              <div className="row">
                <div className="col-4">{book.titulo}</div>
                <div className="col-2">{book.autor}</div>
                <div className="col">{book.isbn}</div>
                <div className="col">{book.paginas}</div>
                <div className="col">{book.ano}</div>
                <div className="col">{book.valor}</div>
              </div>
            </li>
          ))}
        </ul>
      );
}

export default Books