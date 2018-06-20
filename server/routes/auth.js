const express = require('express');
const passport = require('passport');

module.exports = (router) => {
    const redirects = {
        successRedirect: 'http://localhost:8100',
        failureRedirect: 'http://localhost:8100'
    };

    const redirectFunction = (req, res) => {
        res.redirect('http://localhost:8100');
    };

    // GET /auth/google
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  The first step in Google authentication will involve
    //   redirecting the user to google.com.  After authorization, Google
    //   will redirect the user back to this application at /auth/google/callback
    router.get('/auth/google', passport.authenticate('google', { scope: ['openid email profile'] }));

    // GET /auth/google/callback
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  If authentication fails, the user will be redirected back to the
    //   login page.  Otherwise, the primary route function function will be called,
    //   which, in this example, will redirect the user to the home page.
    router.get('/auth/google/callback',
        passport.authenticate('google', redirects),
        redirectFunction
    );

    //This function will pass callback, scope and request new token
    router.get('/auth/vkontakte', passport.authenticate('vkontakte'));

    router.get('/auth/vkontakte/callback',
        passport.authenticate('vkontakte', redirects),
        redirectFunction
    );

    router.get('/auth/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}