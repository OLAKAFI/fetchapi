let showPosts = localStorage.getItem('ePosts');

fetch(`https://jsonplaceholder.typicode.com/posts/${showPosts}`)

.then(response => response.json())
.then((data)=> {
    console.log(data);
    let postLayout = document.getElementById('post-layout');
    postContent = `
            <div class="d-flex justify-content-center"> 
               <div class="card h-100 w-50">
                  <div class="card-body">
                    <div class= "d-flex justify-content-end">
                    <h5 class= "me-3 fs-3 text-success">${data.id}</h5>
                    </div>
                    <h5 class="mb-3 fw-bold" id="my-post-title"> ${data.title}.</h5>
                    <p class="" id="my-post-body">${data.body}.</p>
                           
                  </div>
               </div>  
            </div>`;
            postLayout.innerHTML = postContent;
})
