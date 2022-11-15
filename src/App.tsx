import React, { useEffect, useState } from "react";
import data from "./data/db.json";
import { useKeyPress } from "./hooks/useKeyPress";

function App() {
    const text = data[0].text;

    const [left, setLeft] = useState<string>("");
    const [currentChar, setCurrentChar] = useState<string>(text.charAt(0));
    const [right, setRight] = useState<string>(text.substring(1));
    const key = useKeyPress();

    useEffect(() => {
        if (key === "" || null || undefined) return;
        setLeft((prev) => prev.concat(currentChar));
        setCurrentChar(right.charAt(0));
        setRight((prev) => prev.substring(1));
    }, [key]);

    return (
        <div
            style={{
                height: "100vh",
                padding: "1rem",
                width: "100%",
                whiteSpace: "break-spaces",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <div>
                <span
                    style={{
                        color: "green",
                    }}>
                    {left}
                </span>
                <span
                    style={{
                        color: "red",
                    }}>
                    {currentChar}
                </span>
                <span
                    style={{
                        color: "blue",
                    }}>
                    {right}
                </span>
            </div>
        </div>
    );
}

export default App;
