import React, { Component } from 'react';

class BMICalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      gender: '',
      weight: '',
      height: '',
      bmi: null,
    };
  }

  calculateBMI = () => {
    const { weight, height } = this.state;

    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100;
      const calculatedBMI = weightInKg / (heightInM * heightInM);
      this.setState({ bmi: calculatedBMI.toFixed(2) });
    } else {
      this.setState({ bmi: null });
    }
  };

  render() {
    const { name, age, gender, weight, height, bmi } = this.state;

    return (
      <div>
        <h2>BMI Calculator</h2>
        <label>
          Enter Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </label>
        <br />
        <label>
          Enter Your Age:
          <input
            type="number"
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </label>
        <br />
        <label>
          Enter Your Gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => this.setState({ gender: e.target.value })}
          />
        </label>
        <br />
        <label>
          Enter Your Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => this.setState({ weight: e.target.value })}
          />
        </label>
        <br />
        <label>
          Enter Your Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => this.setState({ height: e.target.value })}
          />
        </label>
        <br />

        <button onClick={this.calculateBMI}>Calculate BMI</button>
        {bmi !== null && (
          <div>
            <h3>Your BMI is: {bmi}</h3>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Gender: {gender}</h3>
            <br />
            BMI Categories:
            <br />
            <b>Underweight:</b> less than 18.5
            <br />
            <b>Healthy Range:</b> 18.5 to 24.9
            <br />
            <b>Overweight:</b> 25 to 29.9
            <br />
            <b>Obesity:</b> 30 or greater
          </div>
        )}
      </div>
    );
  }
}

export default BMICalculator;