import React from "react";

const AuthLayout=({children}:{children:React.ReactNode})=>{
    return(
   <main className="flex justify-center items-center h-screen flex-col bg-zinc-900">
    {children}
   </main>
    )
}
export default AuthLayout













// AuthLayout ek React functional layout component hai jo authentication pages (login, signup, etc.)
//  ke liye reusable wrapper ka kaam karta hai.