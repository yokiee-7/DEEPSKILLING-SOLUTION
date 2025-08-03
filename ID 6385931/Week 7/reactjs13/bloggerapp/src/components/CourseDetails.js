function CourseDetails({ show }) {
  return (
    <>
      {show && (
        <div><h2>🎓 Course Details</h2><p>Course: Full Stack Development</p></div>
      )}
    </>
  ); // Conditional rendering using logical AND
}

export default CourseDetails;
