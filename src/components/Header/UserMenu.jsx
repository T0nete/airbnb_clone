import languageIcon from '../../assets/language.svg'
import menuIcon from '../../assets/menu.svg'
import userIcon from '../../assets/accountCircle.svg'
import { useState } from 'react'
import { UserMenuOption } from './UserMenuOption'

export function UserMenu () {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full'>
        <div className='
            flex
            flex-row
            justify-evenly
            items-center
            space-x-2
            '>
            <div className='
                text-sm
                font-semibold
                px-4
            '>
                <p>Airbnb your home</p>
            </div>
            <img
                className='w-6 h-6 cursor-pointer'
                src={languageIcon}
                alt='language'/>
            <div className='flex flex-row border-[1px] py-2 px-2 rounded-full hover:shadow-md
                transition items-center h-10 gap-2 cursor-pointer'
                onClick={() => handleOnClick()}
                >
                <img
                    className='w-6 h-6'
                    src={menuIcon} alt='menu'/>
                <img
                    className='w-8 h-8'
                    src={userIcon} alt='user'/>
            </div>
        </div>
        {
            isOpen &&
            <div className='
            flex-1
                absolute
                rounded-xl
                bg-white
                shadow-md
                py-2
                right-12
                w-64
                '>
                    <UserMenuOption label ={'Sign up'}/>
                    <UserMenuOption label ={'Log in'}/>
            </div>
        }
    </div>
  )
}
