import React, {Component} from 'react'
import "../../App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Pie } from 'react-chartjs-2';

var trudeaubudget =require('./assets/json/trudeau-budget');
var trudeaupolicy = require('./assets/json/trudeau-policy-costs');
var colours = require('./assets/colour-set');

const getData = (jdata, colourset) =>{
	var data = {
		labels: [],
		datasets: [{
			data: [],
			backgroundColor: [],
			hoverBackgroundColor: []
		}]
	};
	var i;
	var end = jdata.length - 1;
	var decimal;
	for (i = 0; i < end; i++) {
		data.labels.push(jdata[i].title);
		decimal = jdata[i].amount / jdata[end].amount;
		data.datasets[0].data.push(decimal);
		data.datasets[0].backgroundColor.push(colourset[i]);
		data.datasets[0].hoverBackgroundColor.push(colourset[i]);
	}
	return data;
}

const legendOpts = {
  display: true,
  position: 'right',
  fullWidth: true,
  fullHeight: true,
  reverse: false,
  boxWidth: 50,
  align: 'start',
  labels: {
    fontColor: 'rgb(58, 62, 65)',
    padding: 13,
    fontSize: 14,
    fontFamily: 'Raleway',
    usePointStyle: false
  }
};

class PoliticalCandidates extends Component {
    render() {
        return (
            <div>
              <h1>Political Candidate Breakdowns</ h1>
              <div>
              <Tabs defaultActiveKey="profile" id="tab-cands" className="poli-tabs">
                <Tab eventKey="can1" title="Justin Trudeau">
                  <h4>Liberal Party Policy Implementation Costs (2019-2020)</h4>
                  <Pie data={getData(trudeaupolicy, colours)} legend={legendOpts}/>
                  <h4>Liberal Party Operating Budget (2019-2020)</h4>
                  <Pie data={getData(trudeaubudget, colours)} legend={legendOpts}/>
                </Tab>
                <Tab eventKey="can2" title="Andrew Scheer">
                  <p>THE SECOND BEST IS TAILAI AND DANLU CUZ HES OKAY AT LOL</p>
                </Tab>
                <Tab eventKey="can3" title="Jagmeet Singh">
                  <p>TIE FOR THIRD PLACE W UKNOW WHO (R GILLAN)</p>
                </Tab>
               </Tabs>
              </div>
            </div>
        );
    }
}

export default PoliticalCandidates;
