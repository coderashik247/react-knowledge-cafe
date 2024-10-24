import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>
      {/* <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <Blogs></Blogs>
        </div>
        <div>
          <Bookmarks></Bookmarks>
        </div>
      </div> */}
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
