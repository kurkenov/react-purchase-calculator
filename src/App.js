import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import './App.css';


function App() {
  const [price, setPrice] = useState("");
  const [usedDays, setUsedDays] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [usePrice, setCalculatedPrice] = useState("");
  const [dayIncome, setDayIncome] = useState("");

    const handlePriceChange = (e) => {
       setPrice(e.target.value);
    }
    const handleUsedDaysChange = (e) => {
      setUsedDays(e.target.value);
   }
    const handleMonthlyIncomeChange = (e) => {
    setMonthlyIncome(e.target.value);
  }
  
  const showData = () => {
      setCalculatedPrice(Math.round(price/usedDays*100)/100);
      setDayIncome(Math.round(monthlyIncome/30*100)/100);
      console.log(price);
      console.log(usedDays);
      console.log(monthlyIncome);
  }


    return (
      <div className="App">
        <Box>
            <Box p={1}>
              <TextField id="itemPrice" name="itemPrice" label="Price of item" variant="outlined" type="number" onChange={handlePriceChange} value={price} required/>
            </Box>
            <Box p={1}>
              <TextField id="usedDays" name="usedDays" label="Days purchase used in a year" variant="outlined" type="number" onChange={handleUsedDaysChange} value={usedDays} required /> 
            </Box>
            <Box p={1}>
              <TextField id="monthlyIncome" name="monthlyIncome" label="Income per a month" variant="outlined" type="number"  onChange={handleMonthlyIncomeChange} value={monthlyIncome} required /> 
            </Box>
  <Box>
  </Box>

        <Button disabled={!price||!usedDays||!monthlyIncome} variant="contained" onClick={showData}>Calculated</Button>
        <Box>
          <p>The day of using this purchase is worth:   {usePrice} </p>
          <p>Your daily income is:  {dayIncome} </p>         
        </Box>
        </Box>
      </div>
    );
  }
  
  export default App;
