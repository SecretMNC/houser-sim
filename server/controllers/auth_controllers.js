module.exports = {
  login: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;
    let user;
    let found = false;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_users()
      .then(users => {
        users.map(item => {
          if (username == item.username && password == item.password) {
            found = true;
            user = item;
          }
        });
        console.log(user)
        if (found) {
          session.user = user;
          res.status(200).send(String(session.user.user_id));
        } else {
          res.status(403).send("Unauthorized");
        }
      })
      .catch(err => console.log(err));
  },
  register: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .create_user([req.body.username, req.body.password])
      .then(() => {
        req.session.user.username = req.body.username;
        res.status(200).send();
      })
      .catch(() => res.status(500).send());
  },
  logout: (req, res, next) => {
    session.destroy();
    res.status(200).send(req.session);
  }
};
