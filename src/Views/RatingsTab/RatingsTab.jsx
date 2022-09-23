import React from 'react'
import Rating from './Rating';
import {HStack, Skeleton } from '@chakra-ui/react'

export default function RatingsTab({ data, status }) {

  const ShowSkeleton = () => (
    <HStack>
      <Skeleton height='100px' width="100px" />
      <Skeleton height='100px' width="250px" />
    </HStack>
  )

  return (
    <>
      <div className="row">
        {
          status === "idle" || status === "loading" ? (
            ShowSkeleton()
          ) : (
            <></>
          )
        }
        {
            data?.Ratings?.map((e) => (
              <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <Rating data={e} />
              </div>
            ))
        }
      </div>
    </>
  )
}
