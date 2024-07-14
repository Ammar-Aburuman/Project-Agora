import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeitem, updateitem } from "../Features/AddItemSlice"
function Items() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [update, setUpdate] = useState("");
  const [editId, setEditId] = useState(null);

  const updateHandle = (id) => {
    dispatch(updateitem({ id, newText: update }));
    setEditId(null);
    setUpdate("");
  };

  return (
    <>
      <div>items</div>
      <ul className="list-none">
        {items.map((item) => (
          <li
            key={item.id}
          >
            {editId === item.id ? (
              <>
                <input
                  placeholder="Update your item"
                  type="text"
                  value={update}
                  onChange={(e) => setUpdate(e.target.value)}
                />
                <button
                  onClick={() => updateHandle(item.id)}>📁</button>
              </>) : 
              ( <div>{item.text}</div>
            )}
            {editId !== item.id && (
              <button onClick={(e) => setEditId(item.id)}>✏️</button>
            )}
            <button onClick={() => dispatch(removeitem(item.id))}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;