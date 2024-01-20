import React from "react";

function App() {
  const [item, SetItem] = React.useState("");
  const [Lists, SetList] = React.useState([]);
  function HandleChange(event) {
    const Iname = event.target.value;
    SetItem(Iname);
  }
  function AddItem() {
    SetList((prevItem) => {
      return [item, ...prevItem];
    });
    SetItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={HandleChange} />
        <button onClick={AddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Lists.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
