import Cardlist from './components/Cardlist';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  data from "./helper/data"
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [filterData, setFilterData] = useState(data)

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase()
    const filteredData = data.filter((item) => (
       item.title.toLowerCase().includes(inputValue)
    ))
    setFilterData(filteredData)

  }

  return(
    <>
    <Header handleChange={handleChange}  handleShow={handleShow}/>
    <Cardlist data={filterData} setShow = {setShow} show ={show}/>
    </>
  )
}

export default App;
