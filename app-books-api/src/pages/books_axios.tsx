import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'

interface Book{
  id?: number
  name: string
  year: number
}

export function BooksAxiosPage() {

  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    
    const getBooks = async () => {
      const books = 'books'

      const config: AxiosRequestConfig = {
        baseURL: 'http://localhost:3000/'
      } 
      
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 3000))
      
      const data: Book = {name: 'Querido John', year: 2004}

      const response_post = await axios.post(books, data, config)
      
      const response = await axios.get(books, config)

      setBooks(response.data)

      setLoading(false)
      
    }

    getBooks()

  }, [])

  return (
    <div className="App">
      <h1>App Books</h1>

      {
        loading ? 
        (<h2>Loading....</h2>) 
        : 
        (
          <ul>
            {
              books.map(book => (<li key={book.id}>{book.name}</li>))
            }
          </ul>
        )
      }

      
    </div>
  )
}

