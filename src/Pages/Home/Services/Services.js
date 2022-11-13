import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: "Dentists provide professional fluoride treatments in the form of a highly concentrated rinse",
            img: fluoride,
        },
        {
            id: 2,
            name: 'FlCavity Filling',
            description: "Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure",
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour",
            img: whitening,
        },
    ]

    return (
        <div className='my-16'>
            <div className='text-center'>
                <h3 className="text-xl font-bold text-primary uppercase">Services</h3>
                <h2 className="text-2xl">Services We Provided</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;