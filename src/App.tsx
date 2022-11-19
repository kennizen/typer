import React, { useEffect, useState } from "react";
import data from "./data/db.json";
import { useKeyPress } from "./hooks/useKeyPress";

function App() {
  const text = data[0].text.toLowerCase();
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [currentChar, setCurrentChar] = useState<string>("0-0");
  const keyPressed = useKeyPress();

  useEffect(() => {
    if (keyPressed.key === "" || null || undefined) return;
    const [i, j] = currentChar.split("-");
    if (
      keyPressed.key === " " &&
      matrix[parseInt(i)].length - 1 === parseInt(j)
    )
      setCurrentChar((prev) => {
        const [i, j] = prev.split("-");
        return (parseInt(i) + 1).toString() + "-" + "0";
      });
    else {
      const [i, j] = currentChar.split("-");
      if (matrix[parseInt(i)].length - 1 === parseInt(j)) return;
      setCurrentChar((prev) => {
        const [i, j] = prev.split("-");
        return i + "-" + (parseInt(j) + 1).toString();
      });
    }
  }, [keyPressed]);

  useEffect(() => {
    const arr: string[][] = [];
    const wordArr = text.split(" ");

    wordArr.forEach((wrd) => {
      const tmp = [];
      for (let i = 0; i < wrd.length; i++) {
        tmp.push(wrd[i]);
      }
      arr.push(tmp);
    });

    setMatrix(arr);
  }, []);

  return (
    <div
      style={{
        padding: "5rem",
        width: "100%",
        display: "flex",
        columnGap: "0.5rem",
        flexWrap: "wrap",
        fontSize: "40px",
        color: "GrayText",
      }}
    >
      {matrix.map((str: string[], i: number) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {str.map((l: string, j: number) => (
            <div
              key={j}
              style={{
                color:
                  currentChar === i.toString() + "-" + j.toString()
                    ? "red"
                    : "",
              }}
            >
              {l}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
