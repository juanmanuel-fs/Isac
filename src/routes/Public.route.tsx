import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/Home.page'
import Login from '../pages/login/Login'
import Upload from '../pages/upload/Upload.page'

function PublicRoute() {
  return (<>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  </>
  )
}
export default PublicRoute
