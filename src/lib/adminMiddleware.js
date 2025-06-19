import { NextResponse } from "next/server";
const AdminMiddleware = ({children}) => {
    const loggedIn = localStorage.getItem("loggedIn")
    if(!loggedIn){
        return NextResponse.redirect("/admin/login")
    }

    return (
        <>
        {{ children }}
        </>
    )
}
export default AdminMiddleware;