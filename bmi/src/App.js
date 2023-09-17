import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please Enter a valid Weight and Height');
    } else {
      const calculatedBmi = (weight / (height * height)) * 703;
      setBmi(calculatedBmi.toFixed(1));

      if (calculatedBmi < 25) {
        setMessage('You are underweight');
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setMessage('You are a Healthy Weight person');
      } else {
        setMessage('You are Overweight');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>BMI Calculator</h1>
      <form onSubmit={calculateBmi} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Weight (lbs)</label>
          <input
            type="text"
            placeholder="Enter Weight Value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Height (in)</label>
          <input
            type="text"
            placeholder="Enter Height Value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.submitButton}>Submit</button>
          <button onClick={reload} style={styles.reloadButton}>Reload</button>
        </div>
      </form>
      <div style={styles.result}>
        <h2>Your BMI is: {bmi}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '400px',
    padding: '20px',
    background: '#9F44D3',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '18px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    background: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft:'130px'

  },
  reloadButton: {
    padding: '10px 20px',
    fontSize: '16px',
    background: 'white',
    color: 'Black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight:'50px'
  },
  result: {
    marginTop: '20px',
    marginLeft:'70px'
  },
};

export default App;

