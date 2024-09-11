import React from "react";

const LoginPage = () => {
    return (
        <React.Fragment>
            <div>
                <form>
                    <div>
                        <label htmlFor="email">Username</label>
                        <input type="text" id="email" placeholder="Username" />
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="password" />
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;