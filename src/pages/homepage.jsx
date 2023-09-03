import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemon } from "../redux/features/pokedex";
import pokedexImg from "../assets/pokedex.png";
import bgImg from "../assets/bg.png";

function Homepage() {
  const dispatch = useDispatch();
  const { loading, curPokemon, nextPokemon, pokeName, prevPokemon, pokeImg } =
    useSelector((state) => state.pokedex);
  useEffect(() => {
    dispatch(getPokemon(nextPokemon));
  }, []);

  return (
    <div
      id="Homepage"
      className="w-screen h-screen relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "110% 100%",
      }}
    >
      <img
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        src={pokedexImg}
        alt="pokedex"
      />
      <div id="pokeImgContainer">
        <img
          src={pokeImg}
          alt="poke"
          className="absolute top-[19.8rem] left-[35rem] scale-125"
        />
      </div>
      {loading ? (
        ""
      ) : (
        <span className="absolute w-[12.8rem] top-[17.8rem] left-[52rem] -rotate-3 text-2xl text-white font-mono text-center">
          #{curPokemon} {pokeName}
        </span>
      )}
      <button
        className="w-[5.4rem] h-8 absolute top-[31.7rem] left-[51.72rem] -rotate-[1.5deg] rounded text-white hover:bg-gray-500"
        onClick={() => {
          dispatch(getPokemon(prevPokemon));
        }}
      >
        Prev
      </button>

      <button
        className="w-[6rem] h-8 absolute top-[31.5rem] left-[58.9rem] -rotate-[1.5deg] rounded text-white hover:bg-gray-500"
        onClick={() => {
          dispatch(getPokemon(nextPokemon));
        }}
      >
        Next
      </button>
      {/* <span>
        Current Pokemon Id: {curPokemon} <br /> Next Pokemon Id: {nextPokemon}{" "}
        <br /> Prev Pokemon Id: {prevPokemon}
      </span> */}
    </div>
  );
}

export default Homepage;
