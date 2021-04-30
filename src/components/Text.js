import React, { Component } from 'react';
import axios from 'axios';
import Table from './Display'
import District from './DistrictDisplay'
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
        state: "" ,
        switch: 0,
        switchDistrict: 0,
    };
    this.data = [];
    this.districtData = {};
    this.obj = {};
    this.districtObj = {};
    // API call
    axios.get("https://api.covid19india.org/data.json")
            .then(res => {
            for(let i = 0;i < res.data.statewise.length; i++) {
                this.data[i] = res.data.statewise[i];
            }
            })
            // console.log(this.data);
    axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(res=>{
                this.districtData = {...res.data};
                // console.log(this.districtData);
            })
}
//Submit function:
submit(){
    //State/UT data is stored here:
    if(this.state.state === "" || this.state.state.toLowerCase() === "india") {
        this.obj = {...this.data[0]};
    }

    for(let i = 0; i < this.data.length; i++){
        if(this.data[i].state.toLowerCase() === this.state.state.toLowerCase()){
            // console.log(this.state.state);
            this.obj = {...this.data[i]}
        }
    }
    // console.log(this.obj);
    //District data is stored here:
    this.districtObj = this.districtData[this.obj.state];
    // console.log(this.districtObj);


    if(this.obj){
        this.setState({switch: 1});
    }
    if(this.districtObj) {
        this.setState({switchDistrict: 1});
    }


}     
 
  render() {
    return (
      <div>
        <div className="daily">
          <h1>Enter State/UT or India to see the stats:</h1>
          <input type="text" onChange={(e) =>  {
              let c = e.target.value; 
              this.setState({state: c});
              console.log(this.state.state);
        }} />
          <button type="submit" onClick={this.submit}>Submit</button>
          {this.state.switch ? <Table politicalIdentity="STATE/UT"
            state={this.obj.state === "Total" ? "India" : this.obj.state}
            confirmed={this.obj.confirmed}
            recovered={this.obj.recovered}
            deceased={this.obj.deaths}
            active={this.obj.active}
           /> : ''}
           {this.state.switchDistrict ? <District districtTable={this.districtObj.districtData} /> : ''}
           {/* {this.state.switchDistrict && <District districtTable={this.districtObj.districtData} />} */}
           {/* {this.state.switch && 
           Object.keys(this.districtObj.districtData).map((key) => {
                return <District 
                    districtName={key}
                    confirmed={this.districtObj.districtData[key].confirmed}
                />
           })
           } */}
        </div>
      </div>
    );
  }
}