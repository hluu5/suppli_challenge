const axios = require("axios");

const BASE_GITHUB_URL = 'https://api.github.com';

const getEpics = async() => {
  const getFrontEndAuthenticationIssues = async () => {
    return await axios.get(`${BASE_GITHUB_URL}/repos/hluu5/mammoth-frontend/issues?state=all&labels=authentication`);
  }

  const getFrontEndPaymentsIssues = async () => {
    return await axios.get(`${BASE_GITHUB_URL}/repos/hluu5/mammoth-frontend/issues?state=all&labels=payments`);
  }

  const getBackEndAuthenticationIssues = async () => {
    return await axios.get(`${BASE_GITHUB_URL}/repos/hluu5/mammoth-backend/issues?state=all&labels=authentication`);
  }

  const getBackEndPaymentsIssues = async () => {
    return await axios.get(`${BASE_GITHUB_URL}/repos/hluu5/mammoth-backend/issues?state=all&labels=payments`);
  }


  const [
    frontEndAuthenticationIssuesRes,
    frontEndPaymentsIssuesRes,
    backEndAuthenticationIssuesRes,
    backEndPaymentsIssuesRes
  ] = await Promise.all([
    getFrontEndAuthenticationIssues(),
    getFrontEndPaymentsIssues(),
    getBackEndAuthenticationIssues(),
    getBackEndPaymentsIssues()
  ]);

  return {
    paymentIssues: [
      ...frontEndAuthenticationIssuesRes.data,
      ...backEndAuthenticationIssuesRes.data
    ],
    authenticationIssues: [
      ...frontEndPaymentsIssuesRes.data,
      ...backEndPaymentsIssuesRes.data
    ]
  }
}

module.exports = {
  getEpics,
  BASE_GITHUB_URL
}