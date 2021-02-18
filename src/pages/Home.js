import '../css/home.css';
// import '../css/stars.css';

function Home ({user}){

    if (user === null){
        return (
            <div className="titleCard"> 
            {/* <h1>JournalSoft 2021 </h1> */}
            <img src="../imgs/home.png"/>
            
            {/* <Link to="/login"><h2> Login Here </h2> </Link>
            <Link to="/signup"><h2>New? Sign Up here!</h2></Link> */}
            <div class="wrapper">
                <div id="stars"></div>
                <div id="stars2"></div>
            {/* <div id="stars3"></div> */}

            </div>
            </div>
        )
    } else {
    return (
        <div className="titleCard"> 
        {/* <h1>JournalSoft 2021 </h1> */}
        <img src="../imgs/home.png"/>
        <h2>Welcome Back {user.name}</h2> 
        

        <div class="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            {/* <div id="stars3"></div> */}

        </div>

        </div>
    )}

}

export default Home