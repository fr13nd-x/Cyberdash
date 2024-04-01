isnt there any other third services that i can add

this is my code
index.css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.chartContainer {
  position: relative;
  width: 800px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
}

index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App testVar={'Things and Stuff'}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

App.js
import './App.css';
import React,{useState,useEffect} from 'react';
import DataWrapper from './components/DataWrapper'
import CVEContainer from './components/CVEContainer'

function App(props) {
  //begin fetch JSON data https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('data.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    // let values = Object.values(data)
    // let innerValues = Object.values(values)
    //testVar = 'Some random text'

  return (

    <div className="App">
      <h1> Current CVE Data </h1>
      <DataWrapper />
    </div>

  );
}

export default App;


CVEcontainer.js
import React, {useState,useEffect} from 'react';
import DataHeader from './DataHeader';
import DataHeaderLegend from './DataHeaderLegend'

function CVEContainer(props) {

  //begin fetch JSON data https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])

  const topEntries = Object.entries(data)

  // sort records by risk number descending
  topEntries.sort(function(a, b) {
      a = a[1].risk
      b = b[1].risk
      return (a - b)
    })
    .reverse()

  // create a list of CVE container buttons
  const cveContainers = topEntries.map(
    (item) => <CVEButton cve = {item[1]} key = {item[0]} setCVE = {props.setCVE}
    />
  )

  return (
    <div className = "columnWrapper"  >
      <DataHeader />
      <DataHeaderLegend />
      <div className='cveList'>
      {cveContainers}
      </div>
    </div>
  );
}

function CVEButton(props) {
  let riskStyle = { }
  const risk = props.cve.risk;
  if (risk < 50) {
    riskStyle.backgroundColor = 'PaleGreen';
  } else if (risk < 100) {
    riskStyle.backgroundColor = 'Orange';
  } else {
    riskStyle.backgroundColor = 'Tomato';
  }

  const hostSize = props.cve.hosts.length;
  riskStyle.width = hostSize * 3 + 'px';
  //console.log(riskStyle)

  return (
    <div className='cveListColumn' risk={props.cve.risk} onClick = {() => {
      const newClickedCVE = props.cve;
      props.setCVE(newClickedCVE);
    }}>
      <Clickable identifier = {props.cve.identifier}
      risk = {Math.round(props.cve.risk)}
      styleRisk={riskStyle}
      id = {props.cve.id}
      >
      </Clickable>
    </div>
  )
}

function Clickable (props) {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <button
      className={isActive ? 'cveButton active': 'cveButton'}
      onClick={toggleClass}
      id={props.id}
    >
      <div className='cveAccItem'>
        {props.identifier}
      </div>
      <div className='cveAccItem risk' style={props.styleRisk}>
        {props.risk}
      </div>
    </button>
   );
}

export default CVEContainer;


DataHeader.js
import React, {useState,useEffect} from 'react';

function DataHeader(props) {

  return (
    <div className = 'cveListColumn'>
      <div className = 'dataHeader'>
        <div className = 'dataHeaderItem'>
        CVE Identifier
        </div>
         <div className = 'dataHeaderItem'>
        Host Size and Risk
        </div>
      </div>
    </div>
    )
}

export default DataHeader;


DataHeaderLegend.js
import React, {useState,useEffect} from 'react';

function DataHeaderLegend(props) {

  return (
    <div className = 'cveListColumn'>
    <div className = 'legend'>
      <div className = 'legendItem' style={{width: '40%'}}>
        Legend: Risk numbers are rounded. Bar size proportionate to number of hosts.
      </div>
      <div className= 'legend legendItem'>
        <p className = 'legendItem' style={{backgroundColor: 'PaleGreen'}}>
        {'Risk < 50'}
        </p>
        <p className = 'legendItem' style={{backgroundColor: 'orange'}}>
        {'50 - 100'}
        </p>
        <p className = 'legendItem' style={{backgroundColor: 'Tomato'}}>
        {'Risk > 100'}
        </p>
      </div>
    </div>
  </div>
  )
}

export default DataHeaderLegend;


DataWrapper.js
import React,{useState,useEffect} from 'react';
import CVEContainer from './CVEContainer';
import DetailsPanel from './detailsPanel';


function DataWrapper(props) {
  const [activeCVE, setCVE] = useState({});
  const updateActiveCVE = (newActiveCVE) => {
    setCVE(newActiveCVE)
  };

  useEffect(() => {
    const activeRows = document.querySelectorAll('.active')
    activeRows.forEach((item) => {
      if (item.id != activeCVE.id) {
        item.className = 'cveButton'
      } else {
        item.className = 'cveButton active'
      }
    });

  });

  console.log(activeCVE.id)
  console.log(activeCVE.description)
  return (
    <div className="DataWrapper">
      <CVEContainer setCVE = {setCVE}/>
      <DetailsPanel
        identifier = {activeCVE.identifier}
        risk = {activeCVE.risk}
        description = {activeCVE.description}
        hosts = {activeCVE.hosts}
        patches = {activeCVE.patches}
        urls = {activeCVE.urls}
        modified = {activeCVE.modified}
        localId = {activeCVE.id}/>
    </div>

  );
}

export default DataWrapper;


detailspanel.js
import React, {useState,useEffect} from 'react';

function DetailsPanel(props) {

  const hosts = props.hosts?.join(', ')
  const patches = props.patches?.join(', ')
  const urls = props.urls?.trim().split('\n').map((item) => <a href = {item} key = {item}>{item}</a>)

  return (
    <div className = "columnWrapper" >
      <div className = 'detailsPanel'>
        <h4 className = 'detailTitle'> CVE Identifier</h4>
        <p className = 'cveDetails' id = 'cveIdentifier'>
          {props.identifier}
        </p>
        <h4 className = 'detailTitle'>Risk</h4>
        <p className = 'cveDetails' id = 'risk'>
          {props.risk}
        </p>
        <h4 className = 'detailTitle' >Description</h4>
        <p className = 'cveDetails' id = 'description'>
          {props.description}
        </p>
        <h4 className = 'detailTitle'>Hosts = {props.hosts?.length}</h4>
        <p className = 'cveDetails' id = 'hosts'>
          {hosts}
        </p>
        <h4 className = 'detailTitle'>Local ID</h4>
        <p className = 'cveDetails' id = 'localId'>
          {props.localId}
        </p>
        <h4 className = 'detailTitle'>Patches</h4>
        <p className = 'cveDetails' id = 'patches'>
          {patches}
        </p>
        <h4 className = 'detailTitle'>URLs</h4>
        <p className = 'cveDetails' id = 'urls'>
          {urls}
        </p>
        <h4 className = 'detailTitle'>Modified</h4>
        <p className = 'cveDetails' id = 'modified'>
          {props.modified}
        </p>
      </div>
    </div>
  )
}

export default DetailsPanel;


reportWebvitals.js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


