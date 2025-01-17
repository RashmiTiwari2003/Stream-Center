import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle, Padding } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {
    id: { videoId }, snippet }}) => {
  return (
    <Card sx={{width: {xs:'358px', sm:'358px', md: '320px'}, boxShadow: 'none', borderRadius: 0}} >
        <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
             image={snippet?.thumbnails?.high?.url} 
             alt={snippet?.title}
             className='w-full sm:w-[358px] md:w-[320px] h-[180px]'
            />
        </Link>
        <CardContent className='bg-[#1e1e1e] w-full sm:w-[358px] md:w-[320px] h-[106px]'>
          <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' className='font-bold text-white' >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={snippet?.channelId?`/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' className='font-bold text-gray-400' >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard