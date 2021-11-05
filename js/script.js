
// FETCH APIs
let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');
let postForm = document.querySelector('#post-form');
let userPost = [];
// Basic fetch for getting posts in a url
// Geting Post 
function getPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then((data)=> {
        console.log(data)
        


        
        let postLayout = document.getElementById('post-layout');
        let postContent = "";
        userPost = data
        
        

        userPost.forEach(e => {
            postContent +=`
            <div class="col-4 my-3 one-post">
                <a href="./new-page.html" onClick="showOnePage(${e.id})" class="text-black text-decoration-none">
                    <div class="card h-100 ">
                        <div class="card-body">
                            <h3 class="text-danger">${e.id}</h3>
                            <h5 class="update-post-title text-lenght-1">${e.title}</h5>
                            <p class="update-post-body">
                                ${e.body}
                            </p>
                            <div class="d-flex justify-content-between mb-auto">
                                <button type="submit" class="btn btn-info" onClick = updatePosts(${e.id})>Update</button>
                                <button type="submit" class="btn btn-danger" onClick = deletePosts(${e.id})>Delete</button>
                        

                            </div>
                        </div>
                    </div>
                </a>

            </div>     
        `

        postLayout.innerHTML = postContent

        });
    })
}

getPosts();








// CREATE POST USING FETCH ON A FORM
// declare variables for the postTittle, postBody and postForm input field on html


// Even listner that listens to a submit event and activate function createPosts
postForm.addEventListener('submit', getPosts)
postForm.addEventListener('submit', createPosts)





function createPosts(e){
    // To prevent the form from refreshing/reloading the browser (we give an event e in the function), then
    e.preventDefault();
    let pTitle = postTitle.value;
    let pBody = postBody.value;


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: pTitle,
            body : pBody,
            userId: 5
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })

    .then(Response => Response.json())
    .then((data) => {
        console.log('created post', data);
        console.log('all the post', userPost);
        userPost.push(data);
        console.log('updated post',userPost)
        let postLayout = document.getElementById('post-layout');
        let postContent = "";

        userPost.forEach(e => {
            postContent +=`
            <div class="col-4 my-3 one-post">
                <div class="card h-100 ">
                    <div class="card-body">
                        <h3 class="text-danger">${e.id}</h3>
                        <h5 class="update-post-title text-lenght-1 ">${e.title}</h5>
                        <p class="update-post-body ">
                            ${e.body}
                        </p>
                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-info" onClick = updatePosts(${e.id})>Update</button>
                            <button type="submit" class="btn btn-danger" onClick = deletePosts(${e.id})>Delete</button>
                            

                        </div>
                    </div>
                </div>

            </div>    
        `

        postLayout.innerHTML = postContent

        });


        alert('Post created succesfully')

    })


}










// UPDATE A POST USING FETCH API

function updatePosts(postId){
    console.log(postId)
    let pTitle = postTitle.value;
    let pBody = postBody.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: postId,
            title: pTitle,
            body: pBody,
            userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let myPostTitle = document.querySelectorAll('.update-post-title');
            console.log(myPostTitle)
            let myPostBody = document.querySelectorAll('.update-post-body');
            console.log(myPostBody)
        
        

            myPostTitle.forEach((title, index) => {
                if(index + 1 === postId){
                    title.textContent = data.title
                }
            
            })
        

            myPostBody.forEach((body, index) => {
                if(index + 1 === postId){
                    body.textContent = data.body
                }
            })
        })
        
        ;
        alert('Post updated succesfully')

}




// function showThisPost(postId){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         let myOnePost = document.querySelectorAll('.one-post');
//         console.log('one post', myOnePost)

        


//         let postLayout = document.getElementById('post-layout');
//         let postContent = "";
        
//         userPost.forEach(e => {
//             postContent +=`
//             <div class="col-4 my-3">
//                 <div class="card h-100 ">
//                     <div class="card-body">
//                         <h3 class="text-danger">${e.id}</h3>
//                         <h5 class="update-post-title text-lenght-1 ">${e.title}</h5>
//                         <p class="update-post-body ">
//                             ${e.body}
//                         </p>
//                         <div class="d-flex justify-content-between">
//                             <button type="submit" class="btn btn-info" onClick = updatePosts(${e.id})>Update</button>
//                             <button type="submit" class="btn btn-success" onClick = showThisPost(${e.id})>View More</button>
//                             <button type="submit" class="btn btn-danger" onClick = deletePosts(${e.id})>Delete</button>
                            

//                         </div>
//                     </div>
//                 </div>

//             </div>    
            
//             `
//         })
//         postLayout.innerHTML = postContent;

        


    
//     })
    
    
// }





// Delete a Post using fetch delete API




function deletePosts(postId){

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
    
    })

    .then(Response => Response.json())
    .then((data) => {
        console.log('all the post', userPost);
        // look through userPost, and filter if post.id = postId
        // if the postId is not equall to post.id in userPost, it stores it back inside userPost
        // if the postId is equall to post.id in userPost, it remove it from userPost
        userPost = userPost.filter(post => post.id !== postId)
        console.log(userPost)

        let postLayout = document.getElementById('post-layout');
        let postContent = "";

        userPost.forEach(e => {
            postContent +=`
            <div class="col-4 my-3">
                <div class="card h-100 ">
                    <div class="card-body">
                        <h3 class="text-danger">${e.id}</h3>
                        <h5 class="update-post-title text-lenght-1 ">${e.title}</h5>
                        <p class="update-post-body ">
                            ${e.body}
                        </p>
                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-info" onClick = updatePosts(${e.id})>Update</button>
                            <button type="submit" class="btn btn-danger" onClick = deletePosts(${e.id})>Delete</button>
                            

                        </div>
                    </div>
                </div>

            </div>    
        `

        postLayout.innerHTML = postContent

        });


        alert('Post deleted succesfully')

    })


}

// To view the one post only on click of the post on the getPosts function

let data = localStorage.setItem('data', JSON.stringify(data));

function showOnePage(clickThis) {
    
  localStorage.setItem('ePosts', clickThis)
}



















    




    
// }