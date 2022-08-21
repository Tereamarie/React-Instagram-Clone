//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
  // set up state for your data
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {
       posts.map(p => {
         console.log(p)
         
         return <Post
          key = {p.id}
          post ={p}
          likePost = {likePost}
          
         />
      
      
      
      })
      
      
      }
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};
export default PostsPage;
