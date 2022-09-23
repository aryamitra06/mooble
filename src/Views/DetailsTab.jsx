import React from 'react'
import { Text, Badge, Skeleton, Stack } from '@chakra-ui/react'
import { FaImdb } from 'react-icons/fa'
export default function DetailsTab({ data, status }) {

  const noData = "N/A"

  const ShowSkeleton = () => (
    <Stack>
      <Skeleton height='20px' width="80%" />
      <Skeleton height='15px' width="60%" />
      <Skeleton height='15px' width="60%" />
      <Skeleton height='15px' width="50%" />
      <Skeleton height='15px' width="50%" />
      <Skeleton height='15px' width="50%" />
      <Skeleton height='15px' width="50%" />
      <Skeleton height='15px' width="40%" />
      <Skeleton height='15px' width="40%" />
    </Stack>
  )



  return (
    <>
      {
        status === "idle" || status === "loading" ? (
          ShowSkeleton()
        ) : (
          <>
            <div className="d-flex align-items-center gap-2">
              <Text fontSize='xl' as="b">{data?.Title} ({data?.Year})</Text>  <Badge variant='outline' colorScheme='green'>{data?.Type}</Badge><Badge colorScheme='purple'>{data?.Genre}</Badge>
            </div >
            <div className="d-flex gap-2 align-items-center mt-2 mb-2">
              <FaImdb size="30px" />
              <Text fontSize='md'>{data?.imdbRating}/10 ({data?.imdbVotes} Votes)</Text>
            </div>
            <Text fontSize='md' marginBottom="3px">Released: {data?.Released || noData}</Text>
            <Text fontSize='md' marginBottom="3px">DVD: {data?.DVD || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Runtime: {data?.Runtime || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Director: {data?.Director || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Writer: {data?.Writer || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Actors: {data?.Actors || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Box Office: {data?.BoxOffice || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Language: {data?.Language || noData}</Text>
            <Text fontSize='md' marginBottom="3px">Country: {data?.Country || noData}</Text>
          </>
        )
      }
    </>
  )
}
