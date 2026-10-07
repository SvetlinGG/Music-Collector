export default function Login() {
    return (
        <>
        <div className="content">
            <div className="text">Login Form</div>
            <form >
            <div className="field">
                <input type="text" placeholder="email..." required="" />
                <span className="fas fa-user" />
                <label>Email or Phone</label>
            </div>
            <div className="field">
                <input type="password" placeholder="password..."  required="" />
                <span className="fas fa-lock" />
                <label>Password</label>
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