import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

export interface PostProps {
    id?: string;
    title: string;
    email: string;
    summary: string;
    content: string;
    createAt: string;
    updatedAt?: string;
    uid: string;
}

export default function PostList({ hasNavigation = true}: PostListProps){ //profile페이지에선 안보이게
    const [activeTab, setActiveTab] = useState<TabType>("all");
    const [posts, setPosts] = useState<PostProps[]>([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const getPosts = async() => {
        const datas = await getDocs(collection(db, "posts"));
        setPosts([]); //아래 코드 때문에 삭제해도 변경된 getPosts가 보이지 않으므로 여기서 초기화
        datas?.forEach((doc) => {
            console.log(doc.data(), doc.id);
            const dataObj = { ...doc.data(), id: doc.id };
            setPosts((prev) => [...prev, dataObj as PostProps]);
        })
    }

    const handleDelete = async (id:string)=> {
        const confirm = window.confirm('해당 게시글을 삭제하시겠습니까?');
        if(confirm && id){
            await deleteDoc(doc(db,'posts', id));

            toast.success('게시글을 삭제했습니다.');
            navigate("/");
            getPosts(); //변경된 post 리스트를 다시 가져오도록
        }
    };

    useEffect(()=> {
        getPosts();
    }, [])

    return (
        <>
        {hasNavigation && (
            <div className="post__navigation">
                <div role="presentation" 
                onClick={() => setActiveTab("all")}
                className={activeTab === 'all' ? 'post__navigation--active' : ""}>전체글</div>
                <div role="presentation" 
                onClick={() => setActiveTab("my")}
                className={activeTab === 'my' ? 'post__navigation--active' : ""}>나의 글</div>
            </div>
        )}
        <div className="post__list">
                {posts?.length>0 ? posts?.map((post, index)=> (
                    <div key={post?.id} className="post__box">
                    <Link to={`/posts/${post?.id}`}>
                        <div className="post__profile-box">
                            <div className="post__profile" />
                            <div className="post__author-name">{post?.email}</div>
                            <div className="post__date">{post?.createAt}</div>
                        </div>
                        <div className="post__title">{post?.title}</div>
                        <div className="post__text">{post?.summary}</div>
                        </Link>
                        
                        {post?.email === user?.email && (
                            <div className="post__utils-box">
                            <div className="post__delete" role="presentation" onClick={()=> handleDelete(post.id as string)}>삭제</div>
                            <div className="post__edit">
                            <Link to={`/posts/edit/${post?.id}`} >수정</Link>
                            </div>
                        </div>
                        )} 
                    </div>
                )): <div className="post__no-post">게시글이 없습니다.</div>}
            </div>
            </>
    )
}