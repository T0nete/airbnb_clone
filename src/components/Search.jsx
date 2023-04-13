import searchIcon from '../assets/search.svg'

export function Search () {
  return (
    <div className='
        border-[1px]
        py-2
        px-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        items-center
        h-10
        '>
            <div className='
            flex
            flex-row
            items-center
            justify-between
            '>
                <div className='
                    text-sm
                    font-semibold
                    px-4
                '>
                    <p>Anywhere</p>
                </div>
                <div className='
                    border-l-2
                    border-r-2
                    text-sm
                    font-semibold
                    px-4
                    '>
                    <p>Any week</p>
                </div>
                <div className='
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    '>
                    <div className='
                        text-sm
                        text-gray-500
                    '>
                        <p>Add Guests</p>
                    </div>
                    <div className='
                        w-6
                        h-6
                        rounded-full
                        bg-color-primary
                    '>
                        <img
                        className='p-1'
                            src={searchIcon}
                            alt='search'/>
                    </div>
                </div>
            </div>

    </div>
  )
}
