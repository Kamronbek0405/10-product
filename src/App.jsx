
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page/home'
import { About } from './page/about'
import { Shop } from './page/shop'
import { MainLayout } from './layout/main-layout'

function App() {

  return (
    <>
     <MainLayout/>
<Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='*' element={<img style={{width: '100%'}} src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1725494400&v=beta&t=7ODxobcklUlei8lN7u0M3Vetm-LJwP-bo5MYM1-O-qw" alt="" />}/>
 </Routes>
    </>
  )
}

export default App
