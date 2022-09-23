import React from 'react'
import { CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react'

export default function Rating({ data }) {
    const { Source, Value } = data;

    console.log(Value);

    let Rating = 0;
    if(Source === "Internet Movie Database"){
        Rating = parseFloat(Value) * 10;
    }
    else if(Source === "Rotten Tomatoes"){
        Rating = parseFloat(Value);
    }
    else if(Source === "Metacritic"){
        Rating = parseFloat(Value);
    }

    console.log(Rating);

    return (
        <>
            <div className="d-flex align-items-center">
            <CircularProgress value={Rating} color='green.400' size="100px" thickness='2px'>
                <CircularProgressLabel>{Rating}%</CircularProgressLabel>
            </CircularProgress>
            <Text fontSize='lg'>{Source}</Text>
            </div>
        </>
    )
}
