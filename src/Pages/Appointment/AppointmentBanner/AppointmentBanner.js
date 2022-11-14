import chair from '../../../assets/images/chair.png';
import chairBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='bg-no-repeat bg-cover bg-center rounded-lg py-4 mt-8 mb-16' style={{ backgroundImage: `url(${chairBg})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24 mx-auto">
                    <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='card shadow-2xl p-4'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>


    );
};

export default AppointmentBanner;