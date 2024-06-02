
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/publish" element={<Publish />}></Route>
          {/* Default route to /signin */}
          <Route path="/" element={<Navigate to="/signin" replace />} />

          {/* Catch all route to redirect to /blogs */}
          <Route path="*" element={<Navigate to="/blogs" replace />} />
        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
