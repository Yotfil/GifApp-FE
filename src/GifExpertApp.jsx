import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon ball'])

  const onAddCategory = () => {
    setCategories([...categories, `Valorant${categories.length - 1}`])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory />
      <button onClick={onAddCategory}>Add</button>
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}

export default GifExpertApp
