import {DirectoryContainer} from './directory.style.jsx'
import DirectoryItem from '../directory-item/directory-item.component';

import one from '../../assets/home-images/one.png'
import two from '../../assets/home-images/two.png'
import three from '../../assets/home-images/three.png'
import four from '../../assets/home-images/four.png'
import five from '../../assets/home-images/five.png'

const categories = [
  {
    "id": 1,
    "title": "Self Help",
    "imageUrl": one,
    "route": "shop/self%20help"
  },
  {
    "id": 2,
    "title": "business",
    "imageUrl": two,
    "route": "shop/business"

  },
  {
    "id": 3,
    "title": "Adventure",
    "imageUrl": four,
    "route": "shop/adventure"

  },
  {
    "id": 4,
    "title": "Romance",
    "imageUrl": three,
    "route": "shop/romance"

  },
  {
    "id": 5,
    "title": "Tech & IT",
    "imageUrl": five,
    "route": "shop/tech%20&%20it"

  }
]
function Directory () {
  
  return (
    <DirectoryContainer>
    {categories.map((category) => (
        <DirectoryItem  key={category.id} category={category}/>
      ))} 
    </DirectoryContainer>
  )
}

export default Directory