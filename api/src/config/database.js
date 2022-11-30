const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:acR2YGu2bXVcSjDd@cluster0.zxhccbj.mongodb.net/forca?retryWrites=true&w=majority', {
}, () => {
    console.log('connected to database myDb ;)')
})