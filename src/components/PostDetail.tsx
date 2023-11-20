export default function PostDetail(){
    return(
        <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">유리, 곱창 너무 많이 먹어..</div>
                <div className="post__profile-box">
                            <div className="post__profile" />
                            <div className="post__author-name">유리</div>
                            <div className="post__date">2023.11.20 월요일</div>
                        </div>
                        <div className="post__title">게시글</div>
                        <div className="post__utils-box">
                            <div className="post__delete">삭제</div>
                            <div className="post__edit">수정</div>
                        </div>
                        <div className="post__text">
                            유리와 진수<br/>
                            강아지과 고양이<br/>
                            초밥 대 곱창<br />
                            창과 방패<br />
                        </div>
                </div>
            </div>
        </>
    )
}