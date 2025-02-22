

function Footer(){

    return(
        <div className="footer">
            <div className="left"><div className="desc">
                <span>Checkout our Socials</span>
                </div>
                <div className="social-icon">
                <i className='fab fa-facebook'></i>
                <i className='fab fa-instagram'></i>
                
                <i className="fab fa-telegram"></i>
                <i className="fab fa-twitter"></i>
                </div>
                </div>
            <div className="middle"> <div className="logo">
                <span>TheStore<span className="copyright">©</span>
                </span>
                </div>
                <div className="year"><span>@{new Date().getFullYear()}</span></div>
                <div className="mid-icons">
                <i className='fab fa-facebook'></i>
                <i className='fab fa-instagram'></i>
                
                <i className="fab fa-telegram"></i>
                <i className="fab fa-twitter"></i>
                <i className='fab fa-react' id="react"></i>
                </div>
                
                </div>
            <div className="right"><div className="desc-right">
                <span>This website was created</span><span>using ReactJS</span><i className='fab fa-react' id="react"></i></div></div>
        </div>
    )


}

export default Footer