import { Link } from "react-router-dom";
import '../css/home.css';

function Home ({user}){

    if (user === null){
        return (
            <div className="titleCard"> 
            <h1>JournalSoft 2021 </h1>
            
            {/* <Link to="/login"><h2> Login Here </h2> </Link>
            <Link to="/signup"><h2>New? Sign Up here!</h2></Link> */}
            </div>
        )
    } else {
    return (
        <div className="titleCard"> 
        <h1>JournalSoft 2021 </h1>
        <h2>Welcome Back {user.name}</h2> 
        </div>

    )}

}

export default Home