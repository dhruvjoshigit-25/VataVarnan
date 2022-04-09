import React from 'react'
import ReactDOM from 'react-dom'
// import { AnyChart } from 'anychart-react.min.js'
import axios from 'axios';

const complexSettings = {
  width: 800,
  height: 600,
  type: 'column',
  data: "P1,5\nP2,3\nP3,6\nP4,4",
  title: 'Column chart',
  yAxis: [1, {
    orientation: 'right',
    enabled: true,
    labels: {
      format: '{%Value}{decimalPoint:\\,}',
      fontColor: 'red'
    }
  }],
  legend: {
    background: 'lightgreen 0.4',
    padding: 0
  },
  lineMarker: {
    value: 4.5
  }
};

class Ice extends React.Component {
    
    state = {
        ice: []
      }
    componentDidMount() { 
        axios.get("http://127.0.0.1:5000/ice-cover")
        .then(res =>{ 
            const ice = res.data;
            console.log(ice);
            this.setState({ ice });
            
        })
    }

    render() {
    

      return (
         <p>Sid</p>  
      )
  }
    
}
    

export default Ice;
