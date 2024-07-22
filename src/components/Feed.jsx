import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box className='md:px-2 md:min-w-44 sm:h-auto md:h-[89vh] overflow-y-auto'>
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        
        <Typography
        className="copyright text-white"
        variant="body2">
          Copyright 2024
        </Typography>
      </Box>

      <Box className='flex-2 p-2 md:h-[89vh] overflow-y-auto'>
        <Typography variant="h4" className='mb-2 pb-3 font-bold text-white'>
          {selectedCategory} <span className='text-[#F31503]' >Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed