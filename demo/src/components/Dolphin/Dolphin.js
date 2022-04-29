import React from 'react';
import {useParams} from 'react-router-dom';

export default function Dolphin() {
    const { category, name } = useParams();
    console.log(useParams());
    console.log(category);
    
    return (
        <>
            <h2>Dolphin {category} - {name}</h2>
        </>
    );

}