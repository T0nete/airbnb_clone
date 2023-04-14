import beach from '../../assets/categories_icon/beach.jpg'
import amazingViews from '../../assets/categories_icon/amazing_views.jpg'
import cabins from '../../assets/categories_icon/cabins.jpg'
import camping from '../../assets/categories_icon/camping.jpg'
import castle from '../../assets/categories_icon/castle.jpg'
import caves from '../../assets/categories_icon/caves.jpg'
import countryside from '../../assets/categories_icon/countryside.jpg'
import farm from '../../assets/categories_icon/farm.jpg'
import lake from '../../assets/categories_icon/lake.jpg'
import luxe from '../../assets/categories_icon/luxe.jpg'
import mansion from '../../assets/categories_icon/mansion.jpg'
import play from '../../assets/categories_icon/play.jpg'
import skiing from '../../assets/categories_icon/skiing.jpg'
import tinyHome from '../../assets/categories_icon/tiny_home.jpg'

export const categoriesList = [
  {
    label: 'Beach',
    icon: beach
  },
  {
    label: 'Amazing Views',
    icon: amazingViews
  },
  {
    label: 'Cabins',
    icon: cabins
  },
  {
    label: 'Camping',
    icon: camping
  },
  {
    label: 'Castle',
    icon: castle
  },
  {
    label: 'Caves',
    icon: caves
  },
  {
    label: 'Countryside',
    icon: countryside
  },
  {
    label: 'Farm',
    icon: farm
  },
  {
    label: 'Lake',
    icon: lake
  },
  {
    label: 'Luxe',
    icon: luxe
  },
  {
    label: 'Mansion',
    icon: mansion
  },
  {
    label: 'Play',
    icon: play
  },
  {
    label: 'Skiing',
    icon: skiing
  },
  {
    label: 'Tiny Home',
    icon: tinyHome
  }
]

export function Categories () {
  return (
    <div className='w-screen flex'>
      {categoriesList.length > 0 &&
        categoriesList.map(category => {
          return (
            <img
              key={category.label}
              src={category.icon} />
          )
        })
      }
    </div>
  )
}
