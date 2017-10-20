module.exports = {
    login: (req, res, next) => {

        const { session } = req;
        const {username, password } = req.body;
        const user = users.find( user => user.username === username && user.password === password );
        
        if (user) {
            session.user.username = user.username;
            res.status(200).send(session.user); 
        } else {
            res.status(500).send('Unauthorized')
        }
    },
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
            dbInstance.create_user([req.body.username, req.body.password])
               .then( () => {
                   req.session.user.username = req.body.username;
                   res.status(200).send() 
               })
               .catch( () => res.status(500).send() );

    },
    logout:(req, res, next) => {
       session.destroy();
       res.status(200).send(req.session)
    }

}