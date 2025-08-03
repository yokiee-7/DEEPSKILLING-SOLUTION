import { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState('book');

  const renderComponent = () => {
    switch (selected) {
      case 'book':
        return <BookDetails show={true} />;
      case 'blog':
        return <BlogDetails show={true} />;
      case 'course':
        return <CourseDetails show={true} />;
      default:
        return <p>❌ No component selected</p>;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📘 Blogger App</h1>
      <div>
        <button onClick={() => setSelected('book')}>Show Book</button>
        <button onClick={() => setSelected('blog')}>Show Blog</button>
        <button onClick={() => setSelected('course')}>Show Course</button>
      </div>
      <hr />
      {renderComponent()}
    </div>
  );
}

export default App;
