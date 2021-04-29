import "./pipeline.scss";
import Pipe from "./pipe";
import PipeTypes from "../modules/pipe-types";

function Pipeline(props) {
    const pipes = props.pipes;
    const pipeItems = pipes.map((p, index) => <Pipe key={index} name={p.name} type={p.type} />);
    return (<div className={`${props.className} d-flex flex-column flex-start`}>
        <h4>Behind the scene</h4>
        {pipeItems}
        <button className="btn btn-success" disabled={pipes.every(p => p.type !== PipeTypes.OUTPUT)}>Run</button>
    </div>);
}

export default Pipeline;