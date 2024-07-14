import React,{ useState } from "react"
import { useDispatch } from "react-redux"
import { additem } from "../Features/AddItemSlice"

function Additem() {

const [input,setInput] = useState("");
const dispatch = useDispatch();

const additemHandler = (e) => {
    e.preventDefault();
    dispatch(additem(input));
    setInput("");
};

return(
<form onSubmit={additemHandler} className="space-x-3 mt-12">
    <input 
    type="text" 
    placeholder="Enter a task" 
    value={input}
    onChange={(e) => setInput(e.target.value)}/>

    <button type="submit" >
        Add listing 
    </button>
</form>
)
}

export default Additem;