function BookDetails({ show }) {
  if (!show) return null; // Conditional rendering using `if`
  return <div><h2>📚 Book Details</h2><p>Title: React in Action</p></div>;
}

export default BookDetails;
