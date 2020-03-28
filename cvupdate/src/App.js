import React from 'react';
import logo from './logo.svg';
import Text from './components/Text'
import './App.css';


var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: 10,
  position: "fixed",

  // left: "0",
  // bottom: "0",
  // height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}


function App() {
  return (
    <div className="App">
      <div>
        <Text/>
      </div>
      {/* <footer style={style}>
        <b>CREATED BY SAYAN SINGHA</b>
        <br></br>
        <b>email: sayansinghargj@gmail.com</b>
      </footer> */}
    </div>

  );
}

export default App;
