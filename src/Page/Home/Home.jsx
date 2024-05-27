import { useEffect, useState } from 'react';
import './home.css';
import Flags from '../../Component/Flags/Flags';

const Home = () => {
    const [flags, setFlags] = useState([])
    useEffect(()=>{
        fetch("flags.json")
        .then(res => res.json())
        .then(data => setFlags(data))
    },[])

    return (
        <div>           
            <div className='relative z[1]'>
            <video src="https://vs-africa.org/wp-content/uploads/2024/03/Vision-for-Sustainable-Africa.mp4" autoPlay muted loop controls controlsList="nodownload" className="overflow-hidden "></video>
            </div>
            <div className='text-center leading-[45px]'>
                <h1 className='text-[50px] font-bold text-[#016C36] px-16 py-14'>Together, for a sustainable future in Africa</h1>
            </div>
            <div className='text-center leading-[45px] bg-[#E3DDD4]'>
                <h1 className='text-[50px] font-bold text-[#016C36] px-16 py-14'>SDG Ranking of African Region</h1>
            </div>
            <div className='paralux'>
                <div className=' bg-[#1D4055] opacity-85'>                  
                    <div className='grid grid-cols-8 p-4'>
                         {
                             flags.map(flag => <Flags key={flag.nameeng} flag={flag} ></Flags>)
                         }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;