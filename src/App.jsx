import './App.css'
import NavBar from './components/NavBar'
import Note from './components/Note'
import NoteList from './components/NoteList'
import { NoteProvider } from './providers/NoteProvider'

function App() {
  return (
    <NoteProvider>
    <NavBar/>
    <NoteList/>
    <Note/>
    </NoteProvider>
  )
}

export default App
