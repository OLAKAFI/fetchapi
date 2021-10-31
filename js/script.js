
// FETCH APIs

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
            <div class="col-4 my-3">
                <div class="card h-100 ">
                    <div class="card-body">
                        <h3 class="text-danger">${e.id}</h3>
                        <h5 class="card-title text-lenght-1">${e.title}</h5>
                        <p class="card-text text-lenght-3">
                            ${e.body}
                        </p>
                        <div class="d-flex justify-content-between mb-auto">
                            <button type="submit" class="btn btn-success" onClick = updatePosts()>Update</button>
                            <button type="submit" class="btn btn-success" onClick = showThisPost()>View More</button>
                            

                        </div>
                    </div>
                </div>

            </div>     
        `

        postLayout.innerHTML = postContent

        });
    })
}

getPosts();



// CREATE POST USING FETCH ON A FORM
// declare variables for the postTittle, postBody and postForm input field on html
let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');
let postForm = document.querySelector('#post-form');

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
            <div class="col-4 my-3">
                <div class="card h-100 ">
                    <div class="card-body">
                        <h3 class="text-danger">${e.id}</h3>
                        <h5 class="card-title text-lenght-1">${e.title}</h5>
                        <p class="card-text text-lenght-3">
                            ${e.body}
                        </p>
                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-success" onClick = updatePosts()>Update</button>
                            <button type="submit" class="btn btn-success" onClick = showThisPost()>View More</button>
                            

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

// A fetch to create a post and display only the created post
// function createPosts(e){
//     // To prevent the form from refreshing/reloading the browser (we give an event e in the function), then
//     e.preventDefault();
//     let pTitle = postTitle.value;
//     let pBody = postBody.value;
//     let postLayout = document.getElementById('post-layout');
//     let postLayout2 = document.getElementById('post-layout');
//     let postContent2 = "";


//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: pTitle,
//             body : pBody,
//             userId: 5
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },

//     })

//     .then(Response => Response.json())
//     .then((data) => {
//         console.log(data);
//         userPost.concat(data)

//         userPost.forEach(e => {
//             postContent2 +=`
//             <div class="col-4 my-3">
//                 <div class="card h-100">
//                     <div class="card-body">
//                         <h3>${e.id}</h3>
//                         <h5 class="card-title">${e.title}</h5>
//                         <p class="card-text">
//                             ${e.body}
//                         </p>
//                     </div>
//                 </div>

//             </div>    
//         `

//         postLayout2.innerHTML = postContent2

//         });
       
//     })


// UPDATE A POST USING FETCH API

function updatePosts(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'food',
            body: 'bars',
            userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    });







}

function showThisPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data2) => {
        console.log(data2)


        let postLayout = document.getElementById('post-layout');
        let postContent2 = "";
        
            postContent2 +=`
            <div class="col-4 my-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="text-danger">${data2.id}</h3>
                        <h5 class="card-title">${data2.title}</h5>
                        <p class="card-text ">
                            ${data2.body}
                        </p>
                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-success" onClick = updatePosts()>Update</button>
                            <button type="submit" class="btn btn-success" onClick = getPosts()>Back to Post</button>
                            

                        </div>
                    </div>
                </div>
    
            </div>    
        `
        postLayout.innerHTML = postContent2;

        


    
    })
    
    

           
  

    
    
    
}


















    




    
// }