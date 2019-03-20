const Researchtype = require('../../models/researchtype')

module.exports = function (router) {
  router.get('/researchtype/:id', function (req, res) {
    Researchtype.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding Researchtype',
          error: err
        }))
  })

  router.get('/researchtypes', function (req, res) {
    Researchtype.find({}).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding Researchtype',
          error: err
        }))
  })

  router.post('/researchtype', function (req, res) {
    let researchtype = new Researchtype(req.body)
    researchtype.save(function (err, researchtype) {
      if (err) return console.log(err)
      res.status(200).json(researchtype)
    })
  })

  router.put('/researchtype/:id', function (req, res) {
    console.log(req.body)
    let qry = { _id: req.params.id }
    let doc = {
      researchType: req.body.researchType
    }
    console.log(doc)
    Researchtype.update(qry, doc, function (err, respRaw) {
      if (err) return console.log(err)
      res.status(200).json(respRaw)
    })
  })
}
