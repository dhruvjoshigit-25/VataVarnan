
import Ice from './components/Ice';
import Navbar from './components/Navbar';
import MapComponent from './components/MapComponent';
import AnyChart from 'anychart-react.min.js'
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
function App() {
  return (
    <div className="App">
      <Navbar />
      <MapComponent />
      <Ice />
      <AnyChart
      {...complexSettings}
  />
      {/* <IndiaMap /> */}
    </div>
  );
}

export default App;
