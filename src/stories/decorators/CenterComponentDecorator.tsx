const CenterComponentDecorator = (Component) => {
    return (
        <div style={{
            display: "flex",
            background: "red",
            height: "90vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
        }}>
            <Component/>
        </div>
    );
};

export default CenterComponentDecorator;
