import { useState } from "react";
import "./App.css";

function App() {
  //maintaining state of applications
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  //logic part will be displayed here 

  let calcBmi=(e)=>{
    e.preventDefault();
    if(weight===0 || weight===0){
      alert("please enter a valid weight and height")
    }
    else{
      let bmi=(weight/height)*703;
      setBmi(bmi.toFixed(1));
    }

    if(bmi<25){
      setMessage("you are under weight");
    }
    else if(bmi>=25 && bmi<30){
      setMessage("your are healthy and fit");
    }
    else{
      setMessage("you are overWeight");
    }
  }

let reload=()=>{
  window.location.reload;
}

  return (
    <>
      <div className="App">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div className="subdiv">
              <label className="label">weight(IBs)</label>
              <input type="text" placeholder="enter weight value" onChange={(e)=>setWeight(e.target.value) } className="input-field"/>
            </div>

            <div className="subdiv">
              <label className="label">Height(in)</label>
              <input type="text" placeholder="enter the height" onChange={(e)=>setHeight(e.target.value) } className="input-field"/>
            </div>
            <div className="buttons">
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline"
                onClick={reload}
                type="submit"
              >
                Reload
              </button>
            </div>

            <div className="center">
              <h3>Your BMI is  {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

1