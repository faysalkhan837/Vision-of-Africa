import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <div className="bg-[#016C36] text-white md:flex space-y-10 justify-around py-10 px-4">
            <div className="px-5">
            <Link to='/'>
                <img className="max-w-40" src="https://vs-africa.org/wp-content/uploads/2024/03/VISION-FOR-SUSTAINABLE-AFRICA-1.png" />
            </Link>
            </div>
            <div className="px-5">
                <h1 className="text-[26px] font-bold max-sm:border-b-2 uppercase">get in touch</h1>
                <p>EMAIL: president@vs-africa.org</p>
            </div>
            <div className="px-5">
                <h1 className="text-[26px] font-bold uppercase max-sm:border-b-2 ">useful links</h1>
                <div className="leading-7">
                <p><a href="https://cop29.az/en" target="_blank">COP29 Azerbaijan</a></p>
                <p><a href="https://www.unccdcop16.org/" target="_blank">COP16 Riyadh</a></p>
                <p><a href="https://g20land.org/" target="_blank">G20 Global Land Initiative</a></p>
                <p><a href="https://unfccc.int/" target="_blank">UFCCC</a></p>
                <p><a href="https://www.unccd.int/" target="_blank">UFCCD</a></p>
                </div>
            </div>
            <div className="px-5 flex flex-col gap-4">
                <h1 className="text-[26px] font-bold uppercase max-sm:border-b-2 ">newsletter</h1>
                <input type="text" placeholder="Your Name" className="input h-[40px] w-full max-w-[200px]" />
                <input type="text" placeholder="Your Email" className="input h-[40px] w-full max-w-[200px]" />
                <input type="SUBMIT" placeholder="Type here" className="input h-[40px] w-full max-w-[200px] hover:bg-[#016C36] text-[#016C36] hover:text-white hover:border-white border-[2px] font-semibold" />
            </div>

            
        </div>
            <div className="text-center text-base py-4 text-[#016C36]">
                <h1>© 2024 Vision For Sustainable Africa. All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;