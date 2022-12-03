import React from 'react';
import photo from '../images/face.jpg';

export default function Photo() {
    return (
        <img 
            src={photo}
            alt="Not my photo"
            id='bg-img'
        />
    );
}