import React from 'react'
import { Button, Input, Text, IconButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/color-mode'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { MdMovieFilter } from 'react-icons/md'

const initialValue = {
    search: ''
}

function Home() {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === "dark";

    const [movieName, setMovieName] = React.useState(initialValue);

    const handleChange = (e) => {
        setMovieName({ ...movieName, [e.target.name]: e.target.value });
    }

    console.log(movieName);

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${movieName.search}`)
    }


    return (
        <>
            <div className="main_body">
                <div className="row d-flex justify-content-center">
                    <div className="col col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center gap-1">
                        <MdMovieFilter size="65px" style={{color: '#FF0080'}}/>
                        <Text
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            fontWeight='extrabold'
                            fontSize="6xl"
                        >
                            Mooble
                        </Text>
                    </div>
                    <Text textAlign='center' marginBottom='20px' fontSize="2xl">The Powerful Movie Search Engine</Text>
                    <div className="col col-11 col-xs-11 col-sm-11 col-md-12 col-lg-12 col-xl-12">
                        <form className='d-flex justify-content-center align-items-center flex-column gap-2' onSubmit={handleSubmit}>
                            <Input placeholder='Search Movie...' name='search' size='md' width='100%' onChange={(e) => handleChange(e)} />
                            <Button size='md' disabled={movieName.search === ""} type="submit">Search</Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <IconButton icon={isDark ? <IoSunny /> : <IoMoon />} isRound='true' onClick={toggleColorMode} />
            </div>
        </>
    )
}

export default Home