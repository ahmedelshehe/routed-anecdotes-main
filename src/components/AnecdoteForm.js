import { useNavigate } from "react-router-dom"
import { useField } from './../customHooks';
const AnecdoteForm = ({addNew,handleNotification}) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault()
      addNew({
        content :content.value,
        author :author.value,
        info :info.value,
        votes: 0
      })
      navigate('/')
      handleNotification(`a new anecdote ${content} created !`)
      setTimeout(()=>handleNotification(''),5000)
    }
    const handleReset = (e) => {
        e.preventDefault()
        content.reset()
        author.reset()
        info.reset()
    }
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input type={content.type} value={content.value} onChange={content.onChange} />
          </div>
          <div>
            author
            <input  type={author.type} value={author.value} onChange={author.onChange} />
          </div>
          <div>
            url for more info
            <input  type={info.type} value={info.value} onChange={info.onChange} />
          </div>
          <button>create</button> <button onClick={handleReset}>reset</button>
        </form>
      </div>
    )
  
  }
export default AnecdoteForm  