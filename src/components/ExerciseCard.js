import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Stack, Typography} from '@mui/material'
import { exerciseOptions } from '../utils/fetchData'

const ExerciseCard = ({exercise}) => {
  return (
    <Link class='exercise-card' to={`/exercise/${exercise.id}`} style={{ height:'90%'}}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row'>
            <Button sx={{ ml: '21px', color:'#fff', background:'#ffA9A9',
        fontSize:'14px', borderRadius: '20px', textTransform:'capitalize'}}>
            {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color:'#fff', background:'#fcc757',
        fontSize:'14px', borderRadius: '20px', textTransform:'capitalize'}}>
            {exercise.target}
            </Button>
            <Typography ml='21px' color='#000' fontWeight='bold' 
            mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
                {exercise.name}
            </Typography>

        </Stack>
    </Link>
  )
}

export default ExerciseCard