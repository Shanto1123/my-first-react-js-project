// ConditionalRendering using if else

const LoginStatusBtn = (status) => {
    if (status) {
        return <button>Logout Btn</button>; // Assuming you're using a custom Button component
    } else {
        return <button>Login</button>;
    }
};

const ConditionalRendering = () => {
    return (
        <div>
            <h1>Login Status</h1>
            {LoginStatusBtn(true)}
        </div>
    );
};

export default ConditionalRendering;



// ConditionalRendering using Swch Case

const Conditional-Rendering = () => {
    const status = true; 
    return (
        <div>
            switch (status) {
                case true:
                    return <button>Logout btn</button>
            
               case false:
                    return <button>Login btn</button>
                default:
                    return null 
            }
            
        </div>
    );
};

export default Conditional-Rendering;



// ConditionalRendering using ternary operator



const ConditionalRendering = () => {
    const isLoggedIn = true; // Assuming you have a variable indicating the login status

    return (
        <div>
            <h1>Login Status</h1>
            {isLoggedIn ? <button>Logout Btn</button> : <button>Login</button>}
        </div>
    );
};

export default ConditionalRendering;



// ConditionalRendering using Logical && 



const ConditionalRendering = () => {
    const isLoggedIn = true; // Assuming you have a variable indicating the login status

    return (
        <div>
            <h1>Login Status</h1>
            {isLoggedIn && <button>Logout Btn</button>}
            {!isLoggedIn && <button>Login</button>}
        </div>
    );
};

export default ConditionalRendering;


// ConditionalRendering using immediately invoked function expression 



const ConditionalRendering = () => {
    const isLoggedIn = true; // Assuming you have a variable indicating the login status

    return (
        <div>
            <h1>Login Status</h1>
            {(() => {
                if (isLoggedIn) {
                    return <button>Logout Btn</button>;
                } else {
                    return <button>Login</button>;
                }
            })()}
        </div>
    );
};

export default ConditionalRendering;
