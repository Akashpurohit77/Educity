import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia adipisci veritatis iure voluptates magnam enim fugit quo modi pariatur dolorem ad quod. Minus quasi rerum itaque natus possimus est explicabo quaerat sunt voluptate inventore.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab et beatae perspiciatis aspernatur voluptate possimus vitae rem, enim exercitationem neque odit quod autem? Vero itaque commodi dicta repellat.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis repudiandae provident, quidem libero veritatis quibusdam ab molestiae! Ea nihil quisquam libero, a eveniet cupiditate unde. Incidunt ut ex odit.</p>
            </div>
        </div>
    )
}

export default About
