module.exports = {
    port: 5555,
    websocketPort: 7007,
    db: {
        name: 'bug-house',
        options: {
            dialect: 'sqlite',
            storage: 'bug-house.sqlite'
        }
    },
    auth: {
        google: {
            clientID: "564377722563-ujva8g9vnhl07j2s200qqo2acmfle84t.apps.googleusercontent.com",
            clientSecret: "pn9Qr_e0V5pelNRL8nLDE2WY",
            callbackURL: "http://localhost:5555/auth/google/callback"
        },
        vk: {
            clientID: "6262544",
            clientSecret: "bPWvd7Zlh2I4jgJ81etI",
            callbackURL: "http://localhost:5555/auth/vkontakte/callback"
        }
    },
}