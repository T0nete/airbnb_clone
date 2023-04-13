import languageIcon from '../assets/language.svg'
import menuIcon from '../assets/menu.svg'
import userIcon from '../assets/accountCircle.svg'

export function UserMenu () {
  return (
    <div className='
        flex
        flex-row
        items-center
        gap-6
        '>
        <div className='
            text-sm
            font-semibold
            px-4
        '>
            <p>Airbnb your home</p>
        </div>
        <img
            className='
                w-6
                h-6'
            src={languageIcon}
            alt='language'/>
        <div className='
            flex
            flex-row
            border-[1px]
            py-2
            px-2
            rounded-full
            hover:shadow-md
            transition
            cursor-pointer
            items-center
            h-10
            gap-2
        '>
            <img
                className='
                    w-6
                    h-6'
                src={menuIcon} alt='menu'/>
            <img
                className='
                    w-8
                    h-8'
                src={userIcon} alt='user'/>
        </div>
    </div>
  )
}
