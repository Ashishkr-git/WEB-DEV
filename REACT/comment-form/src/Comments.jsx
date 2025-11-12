import { useState } from "react";
import CommentForm from './CommentForm';  

export default function Comments() {
    let [comments, setComments] = useState([{username: "John Doe", comment: "This is a comment", rating: "5"}]);

    let addComment = (commentFormData) => {
        setComments([...comments, commentFormData]);
        console.log(comments)
    }
    
    return (
        <>
        <div>
            <h4>All Comments</h4>
            {comments.map((comment, index) => (
                <div key={index}>
                    <h5>Username: {comment.username}</h5>
                    <p>Comment: {comment.comment}</p>
                    <p>Rating: {comment.rating}</p>
                </div>
            ))}
        </div>
        <hr />
        <CommentForm addComment = {addComment} />
        </>
    );
}