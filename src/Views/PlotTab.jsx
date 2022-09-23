import React from 'react'
import { Text, Skeleton, Stack } from '@chakra-ui/react'

function PlotTab({ data, status }) {

  const ShowSkeleton = () => (
    <Stack>
      <Skeleton height='15px' width="80%" />
      <Skeleton height='15px' width="60%" />
    </Stack>
  )

  return (
    <>
      {
        status === "idle" || status === "loading" ? (
          ShowSkeleton()
        ) : (
          <Text fontSize='lg'>{data?.Plot}</Text>
        )
      }
    </>
  )
}

export default PlotTab