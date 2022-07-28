import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {

  console.log(exerciseVideos)

  if(!exerciseVideos.length) return "Loading...";
  return (
    <Box sx={{marginTop: { lg: '50', xs:'20px'}}} p='20px'>
      <Typography variant='h4' fontWeight='bold' mb='33px'>
        Watch {` `} <span style={{ color: '#ff2625', textTransform:'capitalize'}}>{name}</span> {` `} Exercise Videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
      sx={{flexDirection: { lg: 'row'}, gap: { lg: '110px', xs: '0px'}}}>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index}
          classname='exercise-video'
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          style={{maxWidth:'400px'}}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} 
            style={{maxWidth:'350px', maxHeight:'200px', margin:'0' }}/>
            <Box>
              <Typography sx={{ fontSize: { lg: '18px', xs: '12px' } }} fontWeight={600} color='#000'>
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color='#000'>
                {item.video.channelName}
              </Typography>

            </Box>
          </a>
    
        ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos