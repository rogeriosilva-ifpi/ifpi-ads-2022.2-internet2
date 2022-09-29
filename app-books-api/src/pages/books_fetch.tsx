import { useEffect, useState } from 'react'

interface Book{
  id: number
  name: string
  year: number
}

export function BooksFetchPage() {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(()=>{
    const getBooks = async () => {
      const URL = 'http://localhost:3000/books'
      const init: RequestInit = {
        method: 'GET'
      }
      
      const response = await fetch(URL, init)
      const data = await response.json()
      
      setBooks(data)
      
    }

    getBooks()

  }, [])

  return (
    <div className="App">
      <h1>App Books</h1>
      <ul>
        {
          books.map(book => (<li key={book.id}>{book.name}</li>))
        }
      </ul>
    </div>
  )
}

