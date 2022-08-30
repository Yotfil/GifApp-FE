import { useState } from 'react'

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One punch')

  const onImputChange = ({ target }) => {
    console.log(target.value)
    setInputValue(target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        onChange={onImputChange}
        placeholder='Search a gif'
        value={inputValue}
      />
    </form>
  )
}

export default AddCategory
