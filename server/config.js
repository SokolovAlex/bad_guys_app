module.exports = {
    port: 1111,
    websocketPort: 7007,
    db: {
        name: 'bug-house',
        options: {
            dialect: 'sqlite',
            storage: 'bug-house.sqlite'
        }
    }
}