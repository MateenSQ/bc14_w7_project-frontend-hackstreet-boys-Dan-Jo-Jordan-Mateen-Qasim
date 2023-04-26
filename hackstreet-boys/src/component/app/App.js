import "./App.css";

import "./App.css";
import { useState } from "react"; // import useState hook
import Timeline from "../timeline";

function App() {
    const [buttonClicked, setButtonClicked] = useState(false); // initialize state variable

    function handleClick() {
        console.log("Hello");
        setButtonClicked(true); // update state variable
    }

    return (
        <div className="App">
            <h1>SoC Roadmap App</h1>
            {buttonClicked ? ( // conditionally render the Timeline component or the button
                <Timeline />
            ) : (
                <div>
                    <div>
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                            alt="SoC logo"
                        />
                    </div>
                    <button onClick={handleClick}>Enter</button>
                </div>
            )}
        </div>
    );
}

export default App;
