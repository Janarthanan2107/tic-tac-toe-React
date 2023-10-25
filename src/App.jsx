// import img
import friends from "/assets/friends.webp";
// style
import "./App.css"

const App = () => {
  const Cell = () => {
    return (
      <div className="w-[100px] h-[100px] shadow-sm flex justify-center items-center bg-white font-game text-[2rem]">
        x
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
            <h3 className="message absolute top-1 -left-5 animate-bounce p-3 bg-lightDarkPurple rounded-lg">It's your turn, player X</h3>
            {/* <h3 className="message absolute top-1 -right-5 animate-bounce p-3 bg-lightDarkPurple rounded-lg">Now you, player O!</h3> */}
          </div>
          <img src={friends} alt="friends" />
        </div>

        {/* right */}
        <div className="xo-grid w-[330px] flex flex-col gap-1 bg-darkPurple p-2">
          <div className="flex justify-between">
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="flex justify-between">
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="flex justify-between">
            <Cell />
            <Cell />
            <Cell />
          </div>
        </div>
    </div>
      </div>
    </>
  );
};

export default App;
