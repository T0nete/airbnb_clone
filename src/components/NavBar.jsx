import { Search } from './Search'
import logo from '../assets/airbnb.svg'
export function NavBar () {
  return (
    <header className='
        w-full
        flex
        flex-row
        shadow-md
        justify-evenly
        items-center'>
        <img
        className='
            w-40
            h-100
            p-6'
        src={logo}
        alt='logo'/>
        <Search/>
    </header>
  //
  )
}
