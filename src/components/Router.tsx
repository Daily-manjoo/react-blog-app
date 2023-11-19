import { Route, Routes, Navigate} from 'react-router-dom'; // Route:경로매칭, Routes: 라우트 감싸고있음, Navigate: 정의하지않은 경로 진입시 메인으로
import Home from '../pages/home';
import PostList from '../pages/posts';
import PostDetail from '../pages/posts/detail';
import PostNew from '../pages/posts/new';
import PostEdit from '../pages/posts/edit';
import ProfilePage from '../pages/profile';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';


export default function Router() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<PostList />} />
      <Route path='/posts:id' element={<PostDetail />} />
      <Route path='/posts/new' element={<PostNew />} />
      <Route path='/posts/edit/:id' element={<PostEdit />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/profile' element={<LoginPage />} />
      <Route path='/profile' element={<SignupPage />} />
      <Route path='*' element={<Navigate replace to= "/" />} />
    </Routes>
    </>
  );
}

