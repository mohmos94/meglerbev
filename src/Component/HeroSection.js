import React from 'react';
import Button from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/Videos/skyscrapers.mp4" autoPlay loop muted/>
            <h1>MOSTAFA  MOHAMMEDI</h1>
            <p>Home Page</p>
            <div className='hero-btns'>
                <Button to="Iseer" className="btns" buttonStyle="btn--outline" buttoSize="btn--large">
                    CONTACT
                </Button>
                <Button path="hello" className="btns" buttonStyle="btn--primary" buttoSize="btn--large">
                    WACTH TRAILER < i className='far fa-play-circle'/> 
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;