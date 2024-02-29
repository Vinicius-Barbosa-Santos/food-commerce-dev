import { Outlet } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { SideBar } from '../../components/SideBar'
import * as C from './styles'

export default function Main() {
  return (
    <C.Container>
      <SideBar />
      <section>
        <img src={logoImg} alt="" />
        <Outlet />
      </section>
    </C.Container>
  )
}
