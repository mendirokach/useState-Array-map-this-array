import React from "react";
import Item from "./Item";

function App() {
  const [inputText, setInputText] = React.useState();
  const [items, setItems] = React.useState([]);

  function handleOnChange(e) {
    const { value } = e.target;
    setInputText(value);
  }

  function handleOnClick(event) {
    setItems((prevs) => {
      return [...prevs, inputText];
    });

    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} type="text" value={inputText} />
        <button>
          <span onClick={handleOnClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((x) => (
            <Item item={x} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
