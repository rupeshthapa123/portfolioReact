import Loader from 'react-loaders'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    /* A hook that is being called when the component is mounted. */
    useEffect(() => {
        setanimate();
    }, [])

    /* A function that is being called in the useEffect hook. */
    const setanimate = (() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    });
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        After graduating from Leeds beckett university, with first class honours on computing degree,
                        I have been learning and updating my skills and knowledge through online courses and tutorials.
                    </p>
                    <p>
                        The courses during my academic years were related to computer network, security, database, website development,
                        software development process, mobile application development as well as project management. The programming Langugage
                        and tools that I used was C#, HTML, CSS, PHP, JQuery, SQL database, Microsoft SQL Server, Oracle DB for Data warehouse development, Visual Studio, Android Studio,
                        Linux, PostgreSQL and IDE.
                    </p>
                    <p>
                        Some of the skills and knowledge that I learned outside of my university course were REST API development using node js and python django framework.
                        I learned about different frontend and backend language along with different language, libraries and tools. I have been updating myself with
                        new skills and knowledge such as JavaScript and its framework or libraries React, Node js, Express, MongoDB No SQL database as well as python and
                        its web development framework Django.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color="#306998" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;