import { useState } from "react";
    import { useFormik } from "formik";
 
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "username cannot be empty";
  }
};

export default function CommentForm({ addComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      comment: "",
      rating: 1,
    },
    validate,
    onSubmit: (values) => {
      addComment(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <h4>Add a Comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br />
        <br />
        <textarea
          placeholder="comment"
          value={formik.values.comment}
          name="comment"
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <select
          value={formik.values.rating}
          name="rating"
          onChange={formik.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
