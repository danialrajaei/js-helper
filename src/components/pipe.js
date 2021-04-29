import "./pipe.scss";

function Pipe(props) {
    return (<div className="pipe">
        {props.name} - {props.type}
    </div>);
}

export default Pipe;