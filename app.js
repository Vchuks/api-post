
let allpost = [];
let onepost = [];


let pagelayout = document.getElementById('post-layout');

//getting post

function getposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => { 
    let pagelayout = document.getElementById('post-layout')
    allpost = data;
    console.log(allpost)
    let html = '';
    allpost.forEach(e =>{
        //console.log(element)
        html += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h3 id='post-id'>${e.id}</h3>
                        <h5 class="post-title mb-4" id="pst-title"> ${e.title}</h5>
                        <p class="post-body" id="pst-body">${e.body}</p>
                    </div>
                </div>            
        `
        pagelayout.innerHTML = html;
    })
    let postId = document.getElementById("post-id").textContent;
    let postTitle= document.getElementById('pst-title').textContent;
    let postBody = document.getElementById('pst-body').textContent;



document.getElementById("post-layout").addEventListener("click", page );
function page(e){
   window.open('newpage.html','_blank');
    e.preventDefault();
    let idrow = document.getElementById("idrow");
    let titlerow = document.getElementById("titlerow");
    let bodyrow = document.getElementById("bodyrow");
    
window.localStorage.setItem("id" , postId);
window.localStorage.setItem("title", postTitle);
window.localStorage.setItem("body",postBody);

console.log(localStorage.getItem("id"));
console.log(localStorage.getItem("title"));
console.log(localStorage.getItem("body"));

};

})
}
getposts();