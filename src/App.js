import './App.css';
import {useState,useEffect} from "react";
import Header from "./pages/Header.js"; 
import Footer from "./pages/Footer";
import Content from "./pages/Content";
import AddItem from './pages/AddItem';



function App() {
  const [item, setItem] = useState(() => {
  const saved = localStorage.getItem("todoList");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("todoList", JSON.stringify(item));
}, [item]);


const onCheckItem = (id) => {
  try {
    const updateItem = item.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i
    );
    setItem(updateItem);
  } catch (err) {
    console.error("Error in onCheckItem", err);
  }
};
const addItemToList=(text)=>{
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    
    const newItem = {
    id,
    checked: false,
    des: text,
    addedAt: new Date()
  };
  console.log(newItem)
  const updatedItemList = [...item, newItem];
  setItem(updatedItemList);
}

const deleteItem = (val) => {
  try {
    const updatedItemList = item.filter(i => i.id !== val.id);
    setItem(updatedItemList);
  } catch (err) {
    console.error("Error in deleting item", err);
  }
};


  return (
    <div className="App">
      <Header/>
      <AddItem
      addItemToList={addItemToList}
      />
      <Content
      item={item}
      setItem={setItem}
      onCheckItem={onCheckItem}
      deleteItem={deleteItem}
      />
      <Footer/>
    </div>
  );
}

export default App;
