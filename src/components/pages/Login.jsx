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
            <Link to="/">Forgot Password?</Link>
            </div>
            <button>Sign in</button>
            <div className="sign-up">
                Not a member?
            <Link to="/">signup now</Link>
            </div>
            </form>
        </div>

        </>
    );
}