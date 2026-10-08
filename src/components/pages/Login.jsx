export default function Login() {
    return (
        <>
        <div className="content">
            <div className="text">Login Form</div>
            <form >
            <div className="field">
                <input type="text" placeholder="email..."  required="" />
                <span className="fas fa-user" />
                
            </div>
            <div className="field">
                <input type="password" placeholder="password..."  required="" />
                <span className="fas fa-lock" />
                
            </div>
            <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
            </div>
            <button>Sign in</button>
            <div className="sign-up">
                Not a member?
            <a href="#">signup now</a>
            </div>
            </form>
        </div>

        </>
    );
}