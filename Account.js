export class Account {
    constructor(username,email){
        this.username = username
        this.email = email
        let today = new Date()
        this.yearOfCreation = today.getFullYear()
    }
}

//module.exports = Account