function BlogDetails({ show }) {
  return (
    <>
      {show ? (
        <div><h2>📝 Blog Details</h2><p>Author: Yokesh</p></div>
      ) : null}
    </>
  ); // Conditional rendering using ternary operator
}

export default BlogDetails;
