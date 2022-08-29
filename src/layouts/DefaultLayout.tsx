import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="w-full max-w-[54rem] mx-auto pb-80">
        <Outlet />
      </div>
    </>
  )
}
