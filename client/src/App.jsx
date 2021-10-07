import React, { useEffect, useState } from 'react';
import AgileBoard from "./components/AgileBoard";
import axios from "axios";

const App = () => {
  const [authenticationIssues, setAuthenticationIssues] = useState([]);
  const [paymentIssues, setPaymentIssues] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:4000/api/labels',
    }).then((res)=>{
      setAuthenticationIssues(res.data?.paymentIssues || []);
      setPaymentIssues(res.data?.authenticationIssues || []);
    })
  }, [])

  const openFrontEndRepo = () => {
    window.open('https://github.com/hluu5/mammoth-frontend')
  }
  const openBackEndRepo = () => {
    window.open('https://github.com/hluu5/mammoth-backend')
  }

  return (
    <>
      <h1>Agile Board assignment - Epic feature</h1>
      <button className='repo-button' onClick={openFrontEndRepo}>Open Front End Repo</button>
      <button className='repo-button' onClick={openBackEndRepo}>Open Back End Repo</button>
      <AgileBoard authenticationIssues={authenticationIssues} paymentIssues={paymentIssues}/>
    </>
  );
}

export default App;