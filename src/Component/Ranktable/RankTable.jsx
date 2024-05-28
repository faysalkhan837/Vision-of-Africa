

const RankTable = ({onedata}) => {
    const {name,rankin ,score, bg} = onedata;
    return (
        <tr style={{backgroundColor:`${bg}`}}>
            <td>{name}</td>
            <td>{rankin}</td>
            <td>{score}</td>
        </tr>
    );
};

export default RankTable;