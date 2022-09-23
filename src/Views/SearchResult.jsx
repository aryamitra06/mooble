import React from 'react'
import { Image, Text, Skeleton, Stack, Alert, AlertIcon, IconButton } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { IoMoon, IoSunny } from 'react-icons/io5'
import InfoTabs from '../Views/InfoTabs';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getMovieByTitle } from '../redux/movie_details';

function SearchResult() {

    const dispatch = useDispatch();
    const { moviename } = useParams();

    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === "dark";


    React.useEffect(() => {
        dispatch(getMovieByTitle(moviename))
    }, [dispatch, moviename])

    const data = useSelector((state) => state.movie);

    const { movie, status } = data;

    const MoviePoster = () => (
        status === "idle" || status === "loading" ? (
            <>
                <Stack>
                    <Skeleton height="400px" width="300px"></Skeleton>
                    <Skeleton height="20px" width="200px"></Skeleton>
                </Stack>
            </>
        ) : (
            <>
                <div className="d-flex flex-column gap-2 align-items-center">
                    <Image src={movie?.data?.Poster} alt='Movie Poster' borderRadius="10px" className='poster'/>
                    <Text fontSize='sm'>Poster: {movie?.data?.Title} ({movie?.data?.Year})</Text>
                </div>
            </>
        )
    )
    return (
        <>
            {
                movie?.data?.Response === "False" ? (
                    <div className="container mt-3">
                    <Alert status='error'>
                        <AlertIcon />
                        {movie?.data?.Error}
                    </Alert>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row mt-4 row-customized">
                            <div className="col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <InfoTabs movie={movie} status={status} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
                                {MoviePoster()}
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="footer">
                <IconButton icon={isDark ? <IoSunny /> : <IoMoon />} isRound='true' onClick={toggleColorMode} />
            </div>
        </>
    )
}

export default SearchResult