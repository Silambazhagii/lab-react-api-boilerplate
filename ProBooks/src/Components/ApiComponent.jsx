import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function ApiComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",
      { headers: { 'Authorization': 'whatever-you-want' } })
      .then((response) => {
        const booksData = response.data.books;
        setData(booksData);
      })
  }, []);

  return (
    <div className='api-component'>
      {data.map((item) => (
        <div className='book-container' key={item.id}>
          <div className='left-container'>
            <div className='title'>{item.title}</div>
            <div className='image'><img src={item.imageLinks.smallThumbnail} alt={item.title} /></div>
            <div className='authors'>{item.authors}</div>
          </div>

          <div className='right-container'>
            <article>{item.description}</article>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApiComponent;
