import "./App.scss";
import Pipeline from './components/pipeline'
import PipeTypes from './modules/pipe-types'
import process from "./modules/processor";

function App() {
  const pipes = [{ type: PipeTypes.INPUT, name: 'input' }, { type: PipeTypes.BASE64_ENCODE, name: 'encode base64' }, { type: PipeTypes.OUTPUT, name: 'output' }]
  const outputs = process('asd', pipes);
  const output = outputs.filter(r => r.type === PipeTypes.OUTPUT).map((out, index) => <textarea key={index} id='output' disabled className="form-control disabled" value={out.output}></textarea>
  );
  return (
    <div className="container-fluid d-flex flex-column">
      <div className="row main-view">
        <div className="col-8">
          <label for="user-input" className="form-label">Input</label>
          <textarea id='user-input' className="form-control"></textarea>
          <label for="user-input" className="form-label">Output</label>
          {output}
        </div>
        <Pipeline pipes={pipes} className="col-4" />
      </div>
    </div>
  );
}

export default App;
