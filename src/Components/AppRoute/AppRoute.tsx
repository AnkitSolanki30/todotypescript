import React from 'react'

import { Route, Router, Routes } from 'react-router-dom'
import PH from '../Authentication/Placeholder/PH'
import DemoStepper from '../Authentication/Stapper/DemoStepper'
import Stapper from '../Authentication/Stapper/Stapper'
import Stepper from '../Authentication/Stapper/Stepper'
import StepperHZ from '../Authentication/Stapper/StepperHZ'


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
      <Route path="/ph" element={<PH />}></Route>
      <Route path="/stapper" element={<Stapper />}></Route>
      <Route path="/stepper" element={<Stepper />}></Route>
      <Route path="/demostepper" element={<DemoStepper />}></Route>
      <Route path="/stepperhz" element={<StepperHZ />}></Route>


    </Routes>
  )
}

export default AppRoute