import React from 'react'

import { Route, Routes } from 'react-router-dom'

// import EditUser from '../User/EditUser'
import NotFound from '../NotFound/NotFound'
import TodosHome from '../Todos/TodosHome'
// import Navigationbar from '../NavBar/Navigationbar'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<TodosHome />} />
      {/* <Route exact path="/edituser" element={<EditUser />} /> */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  )
}

export default AppRoute