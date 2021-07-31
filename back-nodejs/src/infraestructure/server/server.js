const express =require('express')

const createServer = async () => {
    const PORT = process.env.PORT || 4000
    const app = express()
    app.use(express.json())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });

    app.use('/api',require('./routes/PublicationRoutes'))
    app.listen(PORT, () => {console.log('Server listening on port 4000')})
}

module.exports =  {createServer} 