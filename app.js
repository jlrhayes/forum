import {Post} from "./Post.js"
import {Account} from "./Account.js"
import {Page} from "./Page.js"
import {Comment} from "./Comment.js"

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
  


let accountList = []
let pageList = []

// function question(text){
//     let answer = '';
//     readline.question('hello', (answer) => {
//         console.log('yes')
//         readline.close()
//       })
//     return answer
// }

function createAccount(){
    let userName = prompt('What will be your username? ')
    let email = prompt('What is your email? ')
    accountList.push(new Account(userName,email))
    return accountList[accountList.length-1]
}

function createPage(){
    let pageTopic = prompt('What will the topic be? ')
    pageList.push(new Page(pageTopic))
}

function createPost(account,page){
    let text = prompt('Please type in your post: \n')
    page.newPost(new Post(text,account))
}

function createComment(account,post){
    let text = prompt('Please type in your comment: \n')
    let newComment = new Comment(text,account)
    post.addComment(newComment)
}


function main(){
    let account = accountSelector()
    let loggedIn = true
    let currentPage = 0
    while (loggedIn){
        if (pageList.length == 0){
            alert('Looks like there are no pages on this forum, go create one! \n')
            createPage()
            pageList[currentPage].displayPosts()
        }else{
            if (pageList[currentPage].posts.length == 0){
                alert("Let's create a new post")
                createPost(account,pageList[currentPage])
            }
        }
    }

}

function signIn(){
    return null
}


function accountSelector(){
    let accountSelect = prompt('Please (1) Sign In To Your Account (2) Create a New One \n')
    if(accountSelect == 1){
        return signIn()
    }
    else if (accountSelect == 2){
        return createAccount()
    }
}

main()