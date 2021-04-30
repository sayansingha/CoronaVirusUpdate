import React from 'react';
import logo from './logo.svg';
import Text from './components/Text'
import './App.css';


var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "5px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '5px',
height: '20px',
width: '90%',
}
 

function App() {
  return (
    <div className="App">
      <div>
        <Text/>
      </div>
      {/* <div class="footer">
        Created by:
        <a href="https://github.com/sayansingha">
          <img src="github.png" alt="github icon" height="15" width="15" />
          Sayan
        </a>
      </div> */}

        <div>
            <div style={phantom} />
            <div style={style}>
            Created by:&nbsp; 
              <a href="https://github.com/sayansingha"
              style={{
                textDecoration: "none",
                color: "#0366d6",
                fontWeight: "bold",
              }}>
                <img src="github.png" alt="github icon" height="15" width="15" />
                &nbsp;Sayan
              </a>
            </div>
        </div>
    </div>

  );
}

export default App;