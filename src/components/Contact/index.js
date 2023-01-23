import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

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

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_j3z8dlj',
                'template_jemypaa',
                refForm.current,
                'Zwdgt13c84LDjYJ6M'
            )
            .then(
                (result) => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities as well.
                        So, if you have any request or question, don't hesitate to contact me using below form.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Rupesh Thapa,
                    <br />
                    Basundhara,
                    <br />
                    Kathmandu, 44600 <br />
                    Nepal<br />
                    <span>rupesh.thapa2050@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[27.74302, 85.32864]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[27.74302, 85.32864]}>
                            <Popup>(Rupesh lives here:)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;