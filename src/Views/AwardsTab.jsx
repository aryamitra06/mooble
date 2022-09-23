import React from 'react'
import { Text, Stack, Skeleton } from '@chakra-ui/react'

export default function AwardsTab({ data, status }) {

    const ShowSkeleton = () => (
        <Stack>
          <Skeleton height='20px' width="80%" />
          <Skeleton height='15px' width="60%" />
        </Stack>
      )

    return (
        <>
        {
            status === "idle" || status === "loading" ? (
                ShowSkeleton()
            ) : (
                <Text fontSize='lg'>{data?.Awards}</Text>
            )
        }
        </>
    )
}
