// import img
import friends from "/assets/friends.webp";
// style
import "./App.css";
import { useState } from "react";

const App = () => {
  // state
  const [turn, setTurn] = useState(true);
  const [cells, setCells] = useState(Array(9).fill(""));

  const messageToggle = () => {
    setTurn(!turn);
  };

  const handleClick = (num) => {
    // message toggle for the players
    messageToggle();

    // values on grid
    let squares = [...cells];

    if (turn === true) {
      squares[num] = "X";
      setTurn(false);
    } else {
      squares[num] = "O";
      setTurn(true);
    }

    setCells(squares)
  };

  const restart = () => {
    setTurn(true);
    setCells(Array(9).fill(''))
  };

  // cell component
  const Cell = ({ num }) => {
    return (
      <div
        className="w-[100px] h-[100px] shadow-sm flex justify-center items-center bg-white font-game text-[2rem]"
        onClick={() => handleClick(num)}
      >
        {cells[num]}
      </div>
    );
  };

  return (
    <>
      <div className="game h-screen bg-lightBlue">
        {/* heading */}
        <h1 className="font-game text-[6vw] text-center text-darkPurple">
          Tic Tac Toe
        </h1>

        {/* game section */}
        <div className="flex justify-center items-center h-[80vh] gap-[8rem]">
          {/* left */}
          <div className="w-[500px] relative">
            {/* message */}
            <div className="font-speech text-[2rem]">
              {turn ? (
                <h3 className="message absolute top-1 -left-5 animate-bounce p-3 bg-lightDarkPurple rounded-lg">
                  It's your turn, player X
                </h3>
              ) : (
                <h3 className="message absolute top-1 -right-5 animate-bounce p-3 bg-lightDarkPurple rounded-lg">
                  Now you, player O!
                </h3>
              )}
            </div>
            <img src={friends} alt="friends" />
          </div>

          {/* right */}
          <div className="flex flex-col items-center">
            <div className="xo-grid w-[330px] flex flex-col gap-1 bg-darkPurple p-2">
              <div className="flex justify-between">
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
              </div>
              <div className="flex justify-between">
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
              </div>
              <div className="flex justify-between">
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
              </div>
            </div>
            <button
              className="px-4 py-3 mt-5 bg-darkPurple text-white rounded-lg"
              onClick={restart}
            >
              Restart Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
