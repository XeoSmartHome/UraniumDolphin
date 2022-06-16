import "./style.scss";

interface ButtonProps {
    label: string,
    type: ["a", "b"]
}

const Button = ({label, type}: ButtonProps) => {
    return (
        <div className={"button button-primary"}>
            {label}
        </div>
    );
};

export default Button;
