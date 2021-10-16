import React, { useState, useEffect } from "react";
import styled from "styled-components";

let clickAudio = new Audio("ting.mp3");
let errAudio = new Audio("error.wav");
let initialState = {
  10: "",
  11: "",
  12: "",
  20: "",
  21: "",
  22: "",
  "00": "",
  "01": "",
  "02": "",
};
const Game = () => {
  const [mat, setMat] = useState(initialState);
  const [turn, setTurn] = useState("X");
  const [win, setWin] = useState(false);
  useEffect(() => {
    winHandler();
  });
  const clickHandler = (s) => {
    if (!win && mat[s] === "") {
      setMat({ ...mat, [s]: turn });
      setTurn(turn === "X" ? "0" : "X");
      clickAudio.play();
    } else {
      errAudio.play();
    }
  };
  const resetHandler = () => {
    setMat(initialState);
    setTurn("X");
    setWin(false);
  };
  const winHandler = () => {
    if (
      (mat["00"] === "X" || mat["00"] === "0") &&
      mat["00"] === mat["01"] &&
      mat["02"] === mat["00"] &&
      mat["02"] === mat["01"]
    ) {
      setWin(true);
    }
    if (
      (mat["10"] === "X" || mat["10"] === "0") &&
      mat["10"] === mat["11"] &&
      mat["12"] === mat["10"] &&
      mat["12"] === mat["11"]
    ) {
      setWin(true);
    }
    if (
      (mat["20"] === "X" || mat["20"] === "0") &&
      mat["20"] === mat["21"] &&
      mat["22"] === mat["20"] &&
      mat["22"] === mat["21"]
    ) {
      setWin(true);
    }
    if (
      (mat["00"] === "X" || mat["00"] === "0") &&
      mat["10"] === mat["00"] &&
      mat["20"] === mat["10"] &&
      mat["00"] === mat["20"]
    ) {
      setWin(true);
    }
    if (
      (mat["01"] === "X" || mat["01"] === "0") &&
      mat["11"] === mat["01"] &&
      mat["21"] === mat["11"] &&
      mat["01"] === mat["21"]
    ) {
      setWin(true);
    }
    if (
      (mat["02"] === "X" || mat["02"] === "0") &&
      mat["12"] === mat["02"] &&
      mat["22"] === mat["12"] &&
      mat["02"] === mat["22"]
    ) {
      setWin(true);
    }
    if (
      (mat["00"] === "X" || mat["00"] === "0") &&
      mat["11"] === mat["00"] &&
      mat["22"] === mat["11"] &&
      mat["00"] === mat["22"]
    ) {
      setWin(true);
    }
    if (
      (mat["11"] === "X" || mat["11"] === "0") &&
      mat["02"] === mat["11"] &&
      mat["11"] === mat["20"] &&
      mat["02"] === mat["20"]
    ) {
      setWin(true);
    }
  };
  return (
    <Container>
      <GameContainer>
        <Box
          style={{ borderTop: 0, borderLeft: 0 }}
          onClick={() => clickHandler("00")}
        >
          <Span>{mat["00"]} </Span>
        </Box>
        <Box style={{ borderTop: 0 }} onClick={() => clickHandler("01")}>
          <Span>{mat["01"]} </Span>
        </Box>
        <Box
          style={{ borderTop: 0, borderRight: 0 }}
          onClick={() => clickHandler("02")}
        >
          <Span>{mat["02"]}</Span>
        </Box>
        <Box style={{ borderLeft: 0 }} onClick={() => clickHandler("10")}>
          <Span>{mat["10"]}</Span>
        </Box>
        <Box onClick={() => clickHandler("11")}>
          <Span>{mat["11"]}</Span>
        </Box>
        <Box style={{ borderRight: 0 }} onClick={() => clickHandler("12")}>
          <Span>{mat["12"]}</Span>
        </Box>
        <Box
          style={{ borderBottom: 0, borderLeft: 0 }}
          onClick={() => clickHandler("20")}
        >
          <Span>{mat["20"]}</Span>
        </Box>
        <Box style={{ borderBottom: 0 }} onClick={() => clickHandler("21")}>
          <Span>{mat["21"]}</Span>
        </Box>
        <Box
          style={{ borderBottom: 0, borderRight: 0 }}
          onClick={() => clickHandler("22")}
        >
          <Span>{mat["22"]}</Span>
        </Box>
      </GameContainer>
      <InfoContainer>
        <h1>Welcome mate</h1>
        <div>
          <Info>
            <span>
              {!win ? `Turn for ${turn}` : turn === "X" ? `0 wins` : "X wins"}
            </span>
            <Reset onClick={() => resetHandler()}>Reset</Reset>
          </Info>
          {win && (
            <Img>
              <img src="/exited.gif" alt="" style={{ width: "100px" }} />
            </Img>
          )}
        </div>
      </InfoContainer>
    </Container>
  );
};

export default Game;

const Container = styled.div`
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  margin-top: 50px;
`;
const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10vw);
  grid-template-rows: repeat(3, 10vw);
`;
const Box = styled.div`
  border: 2px solid;
  font-size: 6vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #cef5db;
  }
`;
const Span = styled.span``;
const InfoContainer = styled.div`
  /* background-color: #93d99d; */
  padding: 0 34px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Reset = styled.button`
  margin: 0 12px;
`;
const Img = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
