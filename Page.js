export class Page {
    constructor(topic){
        this.topic = topic
        this.posts = []
    }
    newPost(post){
        this.posts.push(post)
    }
    displayPosts(){
        console.log('Welcome to the ' + this.topic + ' community!')
        console.log(this.posts)
    }

}

//module.exports = Page