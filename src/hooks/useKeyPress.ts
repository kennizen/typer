import { useEffect, useState } from "react";

export const useKeyPress = () => {
    const [keyPressed, setKeyPressed] = useState<string>("");

    function handleKeyPress(e: KeyboardEvent) {
        setKeyPressed(e.key);
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyPress);
        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
    }, []);

    return keyPressed;
};
