import { useEffect, useState } from "react";
import RankTable from "../Ranktable/RankTable";
import './ranking.css';

const Ranking = () => {
    const [dataone, setDataone] = useState([]);
    const [datatwo, setDatatwo] = useState([]);

    useEffect(()=>{
        fetch('data1.json')
        .then(res => res.json())
        .then(data1 => setDataone(data1))

        fetch('data2.json')
        .then(res => res.json())
        .then(data2 => setDatatwo(data2))
    },[])

    return (
        <div className="flex p-10 justify-between gap-5">
            <div className='md:w-1/2'>
                <table className='w-full border-collapse'>
                    <tr className='bg-[#016C36]'>
                        <th className='text-white text-[18px] font-bold'>Country</th>
                        <th className='text-white text-[18px] font-bold leading-5'>SDG Index Ranking <br /> 2023</th>
                        <th className='text-white text-[18px] font-bold leading-5'>SDG Index Score <br /> 2023</th>
                    </tr>
                        {
                            dataone.map(onedata => <RankTable key={onedata.name} onedata={onedata}></RankTable>)
                        }
                </table>
            </div>
            <div className='md:w-1/2'>
                <table className='w-full border-collapse'>
                    <tr className='bg-[#016C36]'>
                        <th className='text-white text-[18px] font-bold'>Country</th>
                        <th className='text-white text-[18px] font-bold leading-5'>SDG Index Ranking <br /> 2023</th>
                        <th className='text-white text-[18px] font-bold leading-5'>SDG Index Score <br /> 2023</th>
                    </tr>
                        {
                            datatwo.map(datatwo => <RankTable key={datatwo.name} onedata={datatwo}></RankTable>)
                        }
                </table>
            </div>
        </div>
    );
};

export default Ranking;