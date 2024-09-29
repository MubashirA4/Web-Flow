import React from 'react'
import '../css/creativity.css'
import Nattasha from '../assets/natasha.png'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
const Creativity = () => {
    return (
        <div className='creative'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            <div className="p-creative">
                <h2>The Perfect Creativity</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <ul>
                    <li>Efficiently myocardinate market-driven innovation. </li>
                    <li>Idea-sharing with back end products. </li>
                    <li>Ballpark value added activity to beta test.</li>
                </ul>
            </div>
            <div className="quote">
                <p>“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking . Primchat was the modern what we were looking.”</p>
            </div>
            <div className="p-creative">
                <h2>Make real time a wireframes services</h2>
                <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <ul>
                    <li>Efficiently myocardinate market-driven innovation. </li>
                    <li>Idea-sharing with back end products. </li>
                    <li>Ballpark value added activity to beta test.</li>
                    <li>Voluptate at dolores ut dolor </li>
                </ul>
            </div>
            <div className="card">
                <div className="intro">
                    <div className="profile">
                        <img src={Nattasha} alt="" />
                        <div className="content">
                            <h4>Nattasha</h4>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="icons">
                        <FaInstagram size={30} />
                        <IoLogoFacebook size={30} />
                        <IoLogoTwitter size={30} />
                    </div>
                </div>
                <div className="text">
                <p>“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking.”</p>
                </div>
            </div>
        </div>
    )
}

export default Creativity