const newBlogLogic=async UX=>{
    UX.preventDefault();

    const blogTitle=document.querySelector('#blogTitle').value.trim();
    const content=document.querySelector('blogContent').val.trim();

    if(blogTitle&&content){
        const newPost=await fetch('/api/blogs',{
            method:'POST',
            body:JSON.stringify({blogTitle,content}),
            headers:{
                'Content-Type':'application/json',
            },
        });
        if(newPost.ok){
            document.location.replace('/dashboard');
        }else{
            alert('blog not created');
        }
    }
};
const deleteLogic=async UX=>{
    if(UX.target.hasAttribute('data-id')){
        const identity=UX.target.getAttribute('data-id');
        const fetchedData=await fetch(`/api/blogs/${id}`,{
            method:'DELETE',
        });
        if(fetchedData.ok){
            document.location.replace('/dashboard');
        }else{
            alert('try again so this post doesnt come back to haunt you')
        }
    }
};
document
    .querySelector('')
    .addEventListener('submit',newBlogLogic);

document
    .querySelector('')
    .addEventListener('click',deleteLogic);