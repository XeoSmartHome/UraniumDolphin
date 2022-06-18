import "./style.scss";

interface DotProps {
    value: string
}

const Dot = ({value}: DotProps) => {
    return (
        <div className={"dot"}>
            {
                value
            }
        </div>
    );
};

interface RowProps {
    columns: []
}

const Row = ({row}) => {
    return (
        <div className={"row"}>
            {
                Object.keys(row).map((dot) => (
                    <Dot value={row[dot]}/>
                ))
            }
        </div>
    );
};

interface TableProps {
    data: [][]
}

const Table = ({data}: TableProps) => {
    return (
        <div className={"table-danger"} style={{width: 500}}>
            {
                data.map((row, index) => (
                    <Row key={`row-${index}`} row={row}/>
                ))
            }
        </div>
    );
};

export default Table;