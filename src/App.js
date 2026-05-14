import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [recommendation, setRecommendation] = useState("");
const getRecommendation = async () => {
  const response = await fetch("http://127.0.0.1:5000/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ interest }),
  });

  const data = await response.json();
  setRecommendation(data.recommendation);
};
 
  return (
    <div className="container">

      <h1>AI Personalized Learning System</h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <select onChange={(e)=>setInterest(e.target.value)}>

        <option>Select Interest</option>
        <option>Python</option>
        <option>Web Development</option>
        <option>Artificial Intelligence</option>
        <option>Data Science</option>

      </select>

      <button onClick={getRecommendation}>
        Get Recommendation
      </button>

      <div className="result">

        <h2>Hello {name}</h2>

        <h3>Recommended Course</h3>

        <p>{recommendation}</p>

      </div>

    </div>
  );
}

export default App;