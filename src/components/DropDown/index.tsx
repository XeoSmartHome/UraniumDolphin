import "./style.scss"

interface DropDownProps {
    options: {
        label: string;
        value: any;
    }[]
}

const DropDown = ({options = []}:DropDownProps) => {
    return (
        <select name="cars" id="cars" className={"dropdown"}>
            {
                options.map(({label, value}) => {
                    return(
                        <option key={label} label={label} value={value}/>
                    )
                })
            }
        </select>
    );
};

export default DropDown;
