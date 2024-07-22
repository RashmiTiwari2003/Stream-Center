import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } =  useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box className='flex-2 p-2 md:h-[89vh] overflow-y-auto'>
      <Typography variant="h4" className='mb-2 font-bold text-white'>
        Search Results for:  <span className='text-[#F31503]' >{searchTerm}</span> Videos
      </Typography>

      <Box p={2} display="flex" marginTop={4}>
      <Box sx={{ mr: { md: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default SearchFeed