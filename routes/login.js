exports.login = function(req, res){
    console.log(req.user);
    res.render('login', {
        isAuthenticated: req.isAuthenticated()
    });

};