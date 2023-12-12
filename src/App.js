import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle,setPrinciple]=useState(0);
  const [interest,setInterest]=useState(0);
  const [year,setYear]=useState(0);
  const [result,setResult]=useState(0);
  const [isPrincple,setIsPrinciple]=useState(true);
  const [isInterest,setIsInterest]=useState(true);
  const [isYear,setIsYear]=useState(true)

  const calculateInterest=(e)=>{
    e.preventDefault();
    const result=(principle*interest*year)/100
    setResult(result)
  }
  const handleReset=()=>{
    setInterest(0);
    setPrinciple(0);
    setYear(0);
    setResult(0)
  }
  const validate=(e)=>{
    
    const {name,value}=e.target;
    
    // console.log(name,value);
    if(name==='principle'){
      setPrinciple(value);
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
        setIsPrinciple(true)
      }else{
        setIsPrinciple(false)
      }
    }
    else if(name==='interestfield') {
      setInterest(value);
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
        setIsInterest(true)
      }
      else{
        setIsInterest(false)
      }
    }   
    else if(name==='yearr'){
      setYear(value);
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){   
        setIsYear(true);
       }
       else{
        setIsYear(false)
       }
  }
}
  return (
    <>
      <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "90vh" }}>
        <div className="bg-light p-5 rounded " style={{ width: "500px" }}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{ height: "150px" }} className=" flex-column bg-warning rounded mt-3 d-flex justify-content-center align-items-center">
            <h2 id='res'> &#8377; {result}</h2>
            <p>Total Simple Interest</p>

          </div>
          <form className='mt-3' onSubmit={calculateInterest}>
            <TextField value={principle} name='principle' className="w-100 mt-3" id="outlined-basic" label="&#8377; Principle Amount" variant="outlined" onChange={(e)=>validate(e)}  />
            {
              !isPrincple &&
              <div>
                <p className='text-danger'>Invalid input</p>
              </div>
            }
            <TextField value={interest} name='interestfield' className="w-100 mt-2" id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" onChange={(e)=>validate(e)}/>
           {
            !isInterest &&
            <div>
               <p className='text-danger'>Invalid input</p>

            </div>
           }
            <TextField value={year} name='yearr' className="w-100 mt-2" id="outlined-basic" label="Year(Yr)" variant="outlined" onChange={(e)=>validate(e)} />
            {
            !isYear &&
            <div>
               <p className='text-danger'>Invalid input</p>
            </div>
           }
            <Stack direction="row" spacing={2} className='mt-3'>
<Button variant="contained" disabled={isPrincple && isInterest && isYear? false:true} className='bg-success' style={{height:'50px',width:'200px'}} type='submit'>Calculate</Button>
<Button variant="contained" style={{height:'50px',width:'200px',color:'blue'}} className='bg-light' type='reset' onClick={handleReset}>Reset</Button>

          </Stack>
          </form>
          
        </div>
      </div>
    </>
  );

}
export default App;
