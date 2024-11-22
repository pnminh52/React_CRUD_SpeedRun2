import React from "react";

const Add = (props) => {
  const { onHandleSubmit, onHandleChange, errors } = props;
  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [errorName, errorPrice, errorDescription] = errorDetails;
  return (
    <>
      <div>
        <form action="" onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onHandleChange}
          />
          <span>{errorName?.price}</span>
          <input
            type="text"
            name="price"
            placeholder="price"
            onInput={onHandleChange}
          />
          <span>{errorPrice?.price}</span>
          <input
            type="text"
            name="description"
            placeholder="description"
            onInput={onHandleChange}
          />
          <span>{errorDescription?.description}</span>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
