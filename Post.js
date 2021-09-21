export class Post {
    constructor(text,account){
        this.text = text
        this.author = account.username
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        this.timeOfPost = dateTime
        this.votes = 0
        this.comments = []
    }

    upvote(){
        this.votes ++
    }

    downvote(){
        this.votes --
    }

    addComment(comment){
        this.comments.push(comment)
    }
}


//module.exports = Post