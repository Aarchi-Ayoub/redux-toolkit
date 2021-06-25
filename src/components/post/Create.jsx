import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AddPost } from "../../services/PostsServices";
import { useHistory } from "react-router-dom";

const Create = () => {
  // To use our actions
  const dispatch = useDispatch();

  // tate for handeling the changes
  const [state, setstate] = useState({});

  // Handel changes in the inputs
  const handelChanges = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  // For a redirect evenet
  const history = useHistory();

  // methode responsable of the changing
  const create = (e) => {
    e.preventDefault();
    dispatch(AddPost(state));
    history.push("/posts");
  };
  return (
    <Fragment>
      <div className="container mt-3">
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
        <button className="btn btn-secondary btn-lg" onClick={(e) => create(e)}>
          Create
        </button>
      </div>
    </Fragment>
  );
};

export default Create;
