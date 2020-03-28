import React, { Component } from 'react';
import axios from 'axios';
import Table from './Display'
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
        state: "" ,
        switch: 0,
    };
    this.data = [];
    this.obj = {};
    // API call
    axios.get("https://api.covid19india.org/data.json")
            .then(res => {
            //  if(this.state.state.toLowerCase === "india" || this.state.state === ""){
            //     data = res.data.statewise[0];
            //     props = {
            //         state:"Bharat", 
            //         politicalIdentity:"Desh", 
            //         active:data.active ,
            //         confirmed:data.confirmed, 
            //         deaths:data.deaths, 
            //         recovered:data.recovered
            //     };
            // this.data = res.data.statewise;
            for(let i = 0;i < res.data.statewise.length; i++) {
                this.data[i] = res.data.statewise[i];
            }
            })
            console.log(this.data);
           
    // console.log(this.prop);
    
         
            
}
//Submit function:
submit(){
    if(this.state.state === "" || this.state.state.toLowerCase() === "india") {
        this.obj = {...this.data[0]};
    }

    for(let i = 0; i < this.data.length; i++){
        if(this.data[i].state.toLowerCase() === this.state.state.toLowerCase()){
            console.log(this.state.state);
            this.obj = {...this.data[i]}
        }
    }
    console.log(this.obj);
    if(this.obj){
        this.setState({switch: 1});
    }
}     
 
  render() {
    return (
      <div>
        <div className="daily">
          <h1>Enter State:</h1>
          <input type="text" onChange={(e) =>  {
              let c = e.target.value; 
              this.setState({state: c});
              console.log(this.state.state);
        }} />
          <button type="submit" onClick={this.submit}>Submit</button>
          {this.state.switch &&  <Table politicalIdentity="STATE/UT"
            state={this.obj.state === "Total" ? "India" : this.obj.state}
            confirmed={this.obj.confirmed}
            recovered={this.obj.recovered}
            deceased={this.obj.deaths}
            active={this.obj.active}
           />}
        </div>
      </div>
    );
  }
}