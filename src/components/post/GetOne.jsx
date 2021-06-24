import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPost, UpdatePost } from "../../services/PostsServices";

const GetOne = ({ match }) => {
  // To use our actions
  const dispatch = useDispatch();

  // Read from the global state
  const { post } = useSelector((state) => state.post);

  // Get the id from the query
  const postID = match.params.postID;

  // tate for handeling the changes
  const [state, setstate] = useState({});

  // Geting the post of this id in mounting the page
  useEffect(() => {
    dispatch(GetPost(postID));
    setstate(post);
  }, []);

  // Set the post into the state
  useEffect(() => {
    setstate(post);
  }, [post]);

  // Handel changes in the inputs
  const handelChanges = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  // methode responsable of the changing
  const update = (e) => {
    e.preventDefault();
    dispatch(UpdatePost(state.id, state));
  };
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{state.title}</h5>
            <p className="card-text">{state.body}</p>
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="title" className="form-label">
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Your post title"
            value={state.title}
            onChange={(e) => handelChanges(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post body :
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            value={state.body}
            onChange={(e) => handelChanges(e)}
          ></textarea>
        </div>
        <button className="btn btn-secondary btn-lg" onClick={(e) => update(e)}>
          Updated
        </button>
      </div>
    </Fragment>
  );
};

export default GetOne;
