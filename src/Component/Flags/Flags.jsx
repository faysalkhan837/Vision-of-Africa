import './flags.css';

const Flags = ({flag}) => {
    const {nameeng, flagImg} = flag;
    return (
        <div className="flex flex-col items-center w-36 h-36 mx-auto text-center text-white font-semibold space-y-5">
           <div className=''>
                <img className="w-[132px] h-20" src={flagImg}  />
           </div>
           <h1 className="leading-3">{nameeng}</h1> 
        </div>
    );
};

export default Flags;