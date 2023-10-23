const App = () => {
  return (
    <>
      <div className="game h-screen bg-lightBlue">
        {/* heading */}
        <h1 className="font-game text-[6vw] text-center">Tic Tac Toe</h1>

        <div className="grid grid-cols-2 justify-center px-24">
          <div className="game-info relative">
            <h3 className="font-speech text-[2rem] animate-bounce absolute top-[35px] p-3 bg-darkBlue rounded-lg">
              It's your turn, player X
            </h3>
            <img
              src="assets/friends.webp"
              alt="friends"
              className="w-[35rem]"
            />
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="game-section grid grid-cols-3 p-[25px] h-[500px] w-[500px]">
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
              <button className="border-4 bg-white border-darkPurple flex justify-center items-center">
                <span className="font-game text-[3rem]"></span>
              </button>
            </div>

            <span>
              <button className="py-2 px-4 bg-darkPurple text-white rounded-md">
                Restart game
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
