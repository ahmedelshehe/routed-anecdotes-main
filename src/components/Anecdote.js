import { useParams } from "react-router-dom"
const Anecdote =({anecdotes}) =>{
    const id = useParams().id
    const anecdote =anecdotes.find(anecdote => anecdote.id === Number(id))
    return (
        <div>
            <h1>{anecdote.content}</h1>
            <p>has {anecdote.votes} votes</p>
            for more info see <a href={anecdote.info}>{anecdote.info}</a>
        </div>
    )
}
export default Anecdote