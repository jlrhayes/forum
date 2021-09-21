import {Post} from "./Post.js"

export class Comment extends Post{
    constructor(text,account){
        super(text,account)
    }
}

//module.exports = Comment