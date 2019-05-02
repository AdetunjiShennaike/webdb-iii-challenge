//import express and router
const express = require('express');
const router = express.Router();

//import database model
const cohorts = require('../models/cohortModel');

//error returns
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

const missingError = res => {
  res.status(404).json({ error: 'This action does not exist'});
};

const newError = (sts, msg, res) => {
  res.status(sts).json({ error: `${msg}` })
}

//middleware
const nameCheck = () => {
  
}

//CRUD requests
//get actions
router.get('/', (req, res) => {
  cohorts
  .get()
  .then( cohort => {
    res.status(200).json({ cohort });
  })
  .catch( err => {
    return sendError(err, res);
  })
})

//get by id
router.get('/:id', (req, res) => {
  //set id
  let ID = req.params.id

  cohorts
  .getById(ID)
  .then( cohort => {
    if(cohort === undefined){ 
      return missingError(res) 
    }
    else{ 
      return res.status(200).json({ cohort })
    }
  })
  .catch( err => {
    return sendError(err, res);
  })
})

//post request
router.post('/', (req, res) => {
  //set req
  const { name, cohort_id } = req.body;
  const newcohort = { name, cohort_id };

  //check req
  if( !name || !cohort_id ) {
    return newError(406, 'Provide a name and cohort id', res);
  }
  cohorts
  .insert(newcohort)
  .then( cohort => {
    res.status(201).json({ cohort });
  })
  .catch( err => {
    return sendError(err, res);
  })
})

//update request
router.put('/:id', (req, res) => {
  //set id
  let ID = req.params.id

  //set req
  const { name, cohort_id } = req.body;
  const newcohort = { name, cohort_id };

  //check req
  if( !name || !cohort_id ) {
    return newError(406, 'Provide a name and cohort id', res);
  }
  cohorts
  .update(ID, newcohort)
  .then( cohort => {
    if(cohort === undefined){ 
      return missingError(res) 
    }
    else{ 
      res.status(202).json({ cohort });
    }
  })
  .catch( err => {
    return sendError(err, res);
  })
})

//delete request 
router.delete('/:id', (req, res) => {
   //set id
   let ID = req.params.id

   cohorts
   .remove(ID)
   .then( cohort => {
    if(cohort === undefined){ 
      return missingError(res) 
    }
    else{ 
      res.status(202).json({ cohort });
    }
   })
   .catch( err => {
     return sendError(err, res);
   })
})


//export
module.exports = router;