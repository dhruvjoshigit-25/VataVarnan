import React from 'react'
import AnyChart from 'anychart-react';
import anychart from 'anychart'


class IndiaMap extends React.Component {
    render() {
        let data =  anychart.data.set(
            [{"id":"IN.AN","value":0},
                  {"id":"IN.AP","value":1},
                  {"id":"IN.AR","value":2},
                  {"id":"IN.AS","value":3},
                  {"id":"IN.BR","value":4},
                  {"id":"IN.CH","value":5},
                  {"id":"IN.CT","value":6},
                  {"id":"IN.DN","value":7},
                  {"id":"IN.DD","value":8},
                  {"id":"IN.DL","value":9},
                  {"id":"IN.GA","value":10},
                  {"id":"IN.GJ","value":11},
                  {"id":"IN.HR","value":12},
                  {"id":"IN.HP","value":13},
                  {"id":"IN.JH","value":14},
                  {"id":"IN.KA","value":15},
                  {"id":"IN.KL","value":16},
                  {"id":"IN.LD","value":17},
                  {"id":"IN.MP","value":18},
                  {"id":"IN.MH","value":19},
                  {"id":"IN.MNL","value":20},
                  {"id":"IN.ML","value":21},
                  {"id":"IN.MZ","value":22},
                  {"id":"IN.NL","value":23},
                  {"id":"IN.OR","value":24},
                  {"id":"IN.PY","value":25},
                  {"id":"IN.PB","value":26},
                  {"id":"IN.RJ","value":27},
                  {"id":"IN.SK","value":28},
                  {"id":"IN.TN","value":29},
                  {"id":"IN.TR","value":30},
                  {"id":"IN.UP","value":31},
                  {"id":"IN.UT","value":32},
                  {"id":"IN.WB","value":33},
                  {"id":"IN.TG","value":34},
                  {"id":"IN.JK","value":35},
                  {"id":"IN.LA","value":400}]
        );
        return (
            <div className="india-map">
                <div className="container">
                <AnyChart
                    width={800}
                    height={600}
                    type="choropleth"
                    data={data}
                    title="Temperature in India"
                    geoData="anychart.maps.india"
                />
                </div>
            </div>
        );
    }
}

export default IndiaMap;
