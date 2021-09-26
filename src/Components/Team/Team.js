import React, { useEffect, useState } from 'react';
import CoreTeam from '../CoreTeam/CoreTeam';
import Ninja from '../Ninja/Ninja';
import './Team.css';


const Team = () => {

    //   Loading Data From tools.JSON & Declearing State , Effect 

    const [ninjas, setNinjas] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => {
                setNinjas(data)
            })
    }, [])


    // Click Handler button Fuction 

    const [coreTeam, setCoreTeam] = useState([]);

    const handleCoreTeam = (ninja) => {
        const formTeam = [...coreTeam, ninja];
        setCoreTeam(formTeam);
    }

    return (

        <div className='team-setup'>
            <div className="ninja-info">

                {

                    ninjas.map(ninja => <Ninja
                        key={ninja.key}
                        ninja={ninja}
                        handleCoreTeam={handleCoreTeam}
                    ></Ninja>)
                }</div>
            <div className="core-team">
                <CoreTeam
                    coreTeam={coreTeam}
                ></CoreTeam>
            </div>
        </div >
    );
};

export default Team;

/* Info :
     This js file is under Team components. It fetch data from API.
     run severel funtions and passed data as props in Ninja and  CoreTeam components*/