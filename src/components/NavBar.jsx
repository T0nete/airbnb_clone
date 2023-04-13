import { Search } from './Search'
import { UserMenu } from './UserMenu'
import logo from '../assets/airbnb.svg'
export function NavBar () {
  return (
    <header className='
        w-full
        flex
        flex-row
        shadow-md
        justify-center
        '>
          <div className='
            justify-between
            w-11/12
            flex
            flex-row
            items-center'>
            <img className='
                w-40
                h-100
                p-6'
              src={logo}
              alt='logo'
            />
            <Search/>
            <UserMenu />
          </div>

    </header>
  //
  )
}
