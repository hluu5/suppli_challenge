const { getEpics } = require('../utils/app.utils');

const epicsController = async (req, res, next) => {
  try {
    const epics = await getEpics();
    res.json(epics);
  }
  catch(err) {
    if (err?.response && 'status' in err?.response) {
      res.sendStatus(err.response.status);
    } else {
      console.error(err);
      res.sendStatus(500);
    }
  }
}

module.exports = {
  epicsController
};