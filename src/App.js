import logo from './logo.svg';
import './App.css';
import JSXDom from './JsxDom';
import ClassComponent from './component/ClassComponent';
import FCComponent from './component/FCComponent';
import PubsubCom from './communication/PubsubCom';
import Parent from './communication/Parent';
import ParentContextComponent from './context/ParentContextComponent';
import SameParentComponent from './communication/SameParentComponent';

function App2() {
  return (
    <div className="dom">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  const age = 15;
  return (
    <div className="dom center">
      <JSXDom/>
      <div className='center'>parent Value: {age}</div>
      <br/>
      
      <ClassComponent age= {age}/>
      <br/>
      <FCComponent/>

      <br/>
      {/* <PubsubCom/> */}
      <Parent/>

      <br/>
      <SameParentComponent/>
      <br/>
      <ParentContextComponent/>
    </div>
  );
}
export default App;

export { App2 };