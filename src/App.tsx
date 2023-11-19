import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom'; // Route:경로매칭, Routes: 라우트 감싸고있음, Navigate: 정의하지않은 경로 진입시 메인으로

function App() {
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/posts">Post Link</Link>
      </li>
      <li>
      <Link to="/posts/:id">Post Link</Link>
      </li>
      <li>
      <Link to="/posts/new">Post New</Link>
      </li>
      <li>
      <Link to="/profile">Post New</Link>
      </li>
    </ul>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/' element={<h1>Post List Page</h1>} />
      <Route path='/posts:id' element={<h1>Post Detail Page</h1>} />
      <Route path='/posts/new' element={<h1>Post New Page</h1>} />
      <Route path='/posts/edit/:id' element={<h1>Post Edit Page</h1>} />
      <Route path='/profile' element={<h1>Profile Page</h1>} />
      <Route path='*' element={<Navigate replace to= "/" />} />
    </Routes>
    </>
  );
}

export default App;
