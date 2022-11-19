import { useEffect, useState, } from "react";
export const useKeyPress = () => {
    const [keyPressed, setKeyPressed] = useState<{ key: string, counter: number }>({ key: '', counter: 0 });

    function handleKeyPress(e: KeyboardEvent) {
        setKeyPressed(prev => ({ key: e.key, counter: prev.counter + 1 }));
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyPress);
        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
    }, []);

    return keyPressed;
};
