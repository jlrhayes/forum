const Post = require("./Post")
const Account = require("./Account")
const Page = require("./Page")
const Comment = require("./Comment")

test('Create new page', () =>{
    let newPage = new Page('Dogs')
    expect(newPage).toBeInstanceOf(Page)
})

test('New page has a topic name', () =>{
    let newPage = new Page('Dogs')
    expect(newPage.topic).toBe("Dogs")
})

test('New page has empty posts list',() =>{
    let newPage = new Page('Dogs')
    expect(newPage.posts).toEqual([])
})

test('Create new Account', () =>{
    let newAccount = new Account('test','test@gmail.com')
    expect(newAccount).toBeInstanceOf(Account)
})

test('New Account has a username', () =>{
    let newAccount = new Account('test','test@gmail.com')
    expect(newAccount.username).toBe('test')
})

test('New Account has an email', () =>{
    let newAccount = new Account('test','test@gmail.com')
    expect(newAccount.email).toBe('test@gmail.com')
})

test('New Account has a creation year', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let today = new Date()
    expect(newAccount.yearOfCreation).toBe(today.getFullYear())
})

test('Create new Post', () => {
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    expect(newPost).toBeInstanceOf(Post)
})

test('New Post is under page', () =>{
    let newPage = new Page('Dogs')
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    newPage.newPost(newPost)
    expect(newPage.posts).toContain(newPost)
})

test('New Post has text', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    expect(newPost.text).toBe('test post')
})

test('New Post has an author', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    expect(newPost.author).toBe(newAccount.username)
})

test('New Post has time posted', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    expect(newPost.timeOfPost).toBe(dateTime)
})

test('New Post has zero votes', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    expect(newPost.votes).toBe(0)
})

test('New Post has no comments', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    expect(newPost.comments).toEqual([])
})

test('New Post can be upvoted', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    newPost.upvote()
    expect(newPost.votes).toBe(1)
})

test('New Post can be downvoted', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    newPost.downvote()
    expect(newPost.votes).toBe(-1)
})

test('Create new Comment', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    let newComment = new Comment('test comment',newAccount,newPost)
    expect(newComment).toBeInstanceOf(Comment)
})

test('Comment is under post', () =>{
    let newAccount = new Account('test','test@gmail.com')
    let newPost = new Post('test post',newAccount)
    let newComment = new Comment('test comment',newAccount,newPost)
    expect(newPost.comments).toContain(newComment)
})




