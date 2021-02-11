import { Link } from "react-router-dom";
//import '../css/stars.css';

function Home ({user}){

    if (user){
        return (
            <div> 
                <h1>Welcome to JournalSoft 2021 </h1>
                <h2>Welcome Back {user.name}</h2>

                
            </div>
        )
    } else {
    return (
        <div> 
            <h1>Welcome to JournalSoft 2021 </h1>
            <Link to="/login"><h2> Login Here </h2> </Link>
            <Link to="/signup"><h2>New? Sign Up here!</h2></Link>
        </div>
    )}

}

export default Home