import { list } from 'postcss';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Sidedata from './sideData/Sidedata';

const LeftSidenav = () => {

    const [crouse, setCrouse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/crouse_Data')
            .then(res => res.json())
            .then(data => setCrouse(data))
    }, [])
    return (
        <div>
            {
                crouse.map(data => <Sidedata data={data} key={data.id}></Sidedata>)
            }
        </div>
    )
};
export default LeftSidenav;