import logo from './logo.svg';
import '@testing-library/jest-dom';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './view/Home';
import Header from './components/Header';
import List from './view/List';
import Records from './landmarks.json';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>

function App() {
  return (
    <Router>
      <Header />
      <h1><center>Test few words..</center></h1>
      <div className='center'>
       
        
        {
          Records && Records.map(record => {
            return(
              <div className="box" key={record.id}>
                <img width="350px" height="300px" src={record.link}/><br/>
                <strong>{record.landmark_name}</strong><br/>
                <strong>{record.city}</strong><br/>
                <strong>{record.fact}</strong><br/>
                {record.location && record.location.map( data => {
                  return(
                    <div key={record.id}>Location: latitude ( 
                    {data.latitude}) and longitude (
                    {data.longitude})
                    </div>
                  )
                }

                )}
                <p></p>
              </div>
            )
            
          })
        }
   
      </div><br/><br/>
    </Router>
  );
}

export default App;
