import AuthContext from "context/AuthContext";
import { app } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import {toast} from "react-toastify";

const onSignout = async() => {
    try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.")
    } catch(error:any){
        toast.error(error?.code);
    }
};

export default function Profile(){
    // const auth = getAuth(app);
    const { user } = useContext(AuthContext)
    console.log(user)

    return <div className="profile__box">
        <div className="flex__box-lg">
            <div className="profile__image" />
            <div>
                <div className="profile__email">{user?.email}</div>
                <div className="profile__name">{user?.displayName || "사용자"}</div>
            </div>
        </div>
        <div role="presentation" className="profile__logout" onClick={onSignout}>
            로그아웃
        </div>
    </div>
}