import './styles/login.css'


function Login({ onClose }){

    return( 
    
    <div className="login-body">
        <div className="login-content">
        <div className="left-login">
        <i className="fa-solid fa-gear"></i>
            </div>
            <button className="close-btn" onClick={onClose}>✖</button>
            <div className="right-login">
           
            
            <form>
            <h2>Login</h2>
                <input type="text" id="username" name="username" placeholder="Username" required />
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            </div>
            

        </div>
    </div>
    )


}

export default Login