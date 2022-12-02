import React from 'react'
import Menu from '../components/Menu';
import TeamMember from '../components/TeamMember';
const Team = () => {
    return(
        <div className='h-screen'>
            <Menu/>
            <div className='flex justify-center my-5'>
                <h1 className='text-2xl font-bold '>Equipo</h1>
            </div>
            <div className='lg:flex mx-5 justify-center' >
                <TeamMember name={'Alan Quintana '} des={'Developer'} img={'./AlanQuintana.jpg'}/>
                <TeamMember name={'J. Angel Cepeda'} des={'Developer'} img={'./angel.jpeg'}/>
            </div>
        </div>
    );

}

export default Team