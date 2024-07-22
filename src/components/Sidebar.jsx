import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{ flexDirection: { md: "column" } }}
      className='border-[#3d3d3d] border-r-[1px] border-solid md:w-40 text-white overflow-y-auto'
    >
      {categories.map((category) => (
        <button onClick={() => { setSelectedCategory(category.name) }} className='flex justify-center md:justify-normal items-center mx-2 my-1 px-2 md:px-0 py-1 rounded-3xl text-sm category-btn' style={{ background: category.name === selectedCategory && '#FC1503' }} key={category.name} >
          <span style={{ color: category.name === selectedCategory ? 'white' : 'red' }} className='mr-2 ml-1 px-1'>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }} className='flex justify-center px-1 text-center'>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar