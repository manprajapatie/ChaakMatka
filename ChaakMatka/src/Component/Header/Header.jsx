// import { useContext } from "react"
// import { UserContext } from "../../Context/UserContext"
import img1 from "../../img/Logo.png"


import {Link, NavLink} from "react-router-dom"

export const Header = function Header(){
   // This is for Context

    // const {User} = useContext(UserContext)
    // const {setUser} = useContext(UserContext)
    // setUser("I am a superman") 



    return(
        //This is for Context

        // <div className="text-white">
        //     Header is Working
        //     <div>
        //     {User}
        //     </div>
        // </div>

        
        //header contain - nav that contain
        //logo portion
        //link Portion
        //Search Portion

        <header className="bg-slate-900 sticky top-0 z-50" >

           {/*nav contain logo, link and Search*/}
            <nav className="py-1 px-4 min-w-full flex items-center justify-between">

                {/* Logo */}
                <div>
                    <img src={img1} alt="ChaakMatka" className=" h-20"/>
                    
                </div>


                {/* Link */}
                
                <div>
                
                <ul>
                
                <li>
                <NavLink to="/"
                className= {(isActive) => `text-white bg-slate-950 px-4 py-2 rounded-lg hover:bg-sky-950 duration-200 ${isActive? "hover:bg-sky-950" : "bg-slate-950"}` }>
                    Home
                </NavLink>
                </li>

                </ul>



                </div>
            
            </nav>

        </header>
    )
}