import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard,ChannelCard,PlaylistCard, Loader } from './'

const Videos = ({videos, direction}) => {
  if(!videos?.length) return <Loader/>
  // console.log(videos)
  return (
    <Stack direction={direction || "row"} justifyContent="start" alignItems="start" gap={2} flexWrap="wrap" >
      {videos.map((item,ind) => (
        <Box key={ind}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item} marginTop="60px"/>}
          {item.id.playlistId && <PlaylistCard playlistDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos