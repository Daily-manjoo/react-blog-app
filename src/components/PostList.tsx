import { Link } from "react-router-dom";
import { useState } from "react";

interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true}: PostListProps){ //profile페이지에선 안보이게
    const [activeTab, setActiveTab] = useState<TabType>("all");
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
                {[...Array(10)].map((e, index)=> (
                    <div key={index} className="post__box">
                    <Link to={`/posts/${index}`}>
                        <div className="post__profile-box">
                            <div className="post__profile" />
                            <div className="post__author-name">유리</div>
                            <div className="post__date">2023.11.20 월요일</div>
                        </div>
                        <div className="post__title">게시글 {index}</div>
                        <div className="post__text">
                            유리와 진수<br/>
                            강아지과 고양이<br/>
                            초밥 대 곱창<br />
                            창과 방패<br />
                        </div>
                        <div className="post__utils-box">
                            <div className="post__delete">삭제</div>
                            <div className="post__edit">수정</div>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
            </>
    )
}