import logo from './logo.svg';
import './App.css';
import Jack  from './context/First';
function JSXDom(props) {
  function handleClick() {
    const num = 1234;
    alert(num);
  }
  return (
    // <h1></h1>
    <div className="App" onClick={handleClick}>
      I am JSXDom,
      who are you;
      <Jack/>
    </div>

  );
}

export default JSXDom;

