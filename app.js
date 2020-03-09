const express =  require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(require('./controllers/index'));

io.on('connection', (socket)=>{
    console.log("User is connected");

    socket.on('chat message', (msg) => {
        
        io.emit('chat message', msg)

    });

});



http.listen(3000, () => {
    console.log('listening on port 3000');
});