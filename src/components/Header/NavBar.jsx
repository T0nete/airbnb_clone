import { Search } from './Search'
import { UserMenu } from './UserMenu'
import logo from '../../assets/airbnb.svg'
export function NavBar () {
  return (
    <header className='
        w-full
        flex
        flex-row
        shadow-md
        justify-between
        items-center
        '>
            <div className='w-4/12'>
              <img className='
                    w-40
                    h-100
                    p-6'
                  src={logo}
                  alt='logo'
              />
            </div>
            <div className=' w-4/12'>
              <Search/>
            </div>
            <div className='w-4/12'>
              <UserMenu />
            </div>

    </header>
  //
  )
}
