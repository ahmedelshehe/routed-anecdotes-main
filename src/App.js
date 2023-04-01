import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import AnecdoteList from './components/AnecdotesList'
import AnecdoteForm from './components/AnecdoteForm'
import About from './components/About'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Anecdote from './components/Anecdote'
const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
      <Menu />
      {notification !== '' ? <p> {notification}</p> : null}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes}/>} />
        <Route path="/create" element={<AnecdoteForm addNew ={addNew} handleNotification={(message)=>setNotification(message)}/>} />
        <Route path="/about" element={<About />} />
        <Route path='/anecdotes/:id' element={<Anecdote anecdotes={anecdotes} />} />
      </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App