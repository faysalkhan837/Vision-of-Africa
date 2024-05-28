import { Link } from 'react-router-dom';
import './whoweare.css'

const WhoWeAre = () => {
    return (
        <div>
            <div className="relative pt-16">
                <video src="https://vs-africa.org/wp-content/uploads/2024/05/vsa-who-we-are.mp4" autoPlay loop playsInline muted></video>
                <div className="midle text-center">
                    <h1 className="text-[50px] font-semibold text-white leading-[50px]">Nurturing Africa’s Future through Sustainable & Climate Solutions</h1>
                    <Link to='/contuctus'><button className='grow-button mt-10'>Contuct Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;