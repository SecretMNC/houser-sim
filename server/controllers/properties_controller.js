module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');

      dbInstance.create_property([req.body.prop_name, req.body.prop_desc, req.body.address, req.body.city,req.body.state, req.body.zip, req.body.image, req.body.loan_amt, req.body.monthly_mortg, req.body.desired_rent, req.body.user_id ])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_properties()
        .then( properties => res.status(200).send( properties ) )
        .catch( () => res.status(500).send() );
    },
  
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.delete_property([req.params.id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }

// FILTER

  };