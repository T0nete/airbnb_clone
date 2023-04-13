import searchIcon from '../assets/search.svg'

export function Search () {
  return (
    <div className='
        border-[1px]
        w-full
        py-2
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
                    px-6
                '>
                    <p>Anywhere</p>
                </div>
                <div className='
                    border-l-2
                    border-r-2
                    text-sm
                    font-semibold
                    px-6
                    '>
                    <p>Any week</p>
                </div>
                <div className='
                    flex
                    items-center
                    justify-center
                    '>
                    <div className='
                        text-sm
                        text-gray-500
                    '>
                        <p>Add Guests</p>
                    </div>
                    <img
                    className='
                        object-contain
                        h-6
                        px-6
                    '
                    src={searchIcon}
                    alt='search'/>
                </div>
            </div>

    </div>
  )
}
