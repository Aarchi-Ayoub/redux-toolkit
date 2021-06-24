import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts, DeletePost } from "../../services/PostsServices";
import { useHistory } from "react-router-dom";

const List = () => {
  // To use our actions
  const dispatch = useDispatch();

  // Read the gloabl state
  const { posts } = useSelector((state) => state.post);

  // In mounting the page get all data from our server
  useEffect(() => dispatch(GetPosts()), []);

  // For a redirect evenet
  const history = useHistory();

  return (
    <Fragment>
      <div className="container">
        <ul className="list-group mt-3">
          {posts &&
            posts.map((post, index) => (
              <li key={index} className="list-group-item mt-2">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <div className="float-end">
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => {
                      history.push(`/posts/${post.id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(DeletePost(post.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};
export default List;
