const mongooes = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongooes.Schema({
    username:{
        type : String,
        require : [true, 'username is required'],
        unique : true,
        trim : true,
        minlength : [3, 'Username must be at least 3 characters long']

    },
    email:{
        type : String,
        require : true,
        unique : true,
        trim : true,
        lowercase :true
    },
    password:{
        type : String,
        require : [true, 'Password is required'],
        minlength : [6, 'Password must be at least 6 characters long']
    },
    createdAt:{
        type : Date,
        createdAt : Date.now
    }
})

// Pre-save hook to hash password before saving to database

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next()  // Only hash if password was modified or is new
    }

const salt = await bcrypt.genSalt(10)   // Generate salt
this.password = await bcrypt.hash(this.password, salt) // Hash password
next()
});

//method to compare password

userSchema.method.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
};

module.exports = mongooes.model('TODOUSER', userSchema)