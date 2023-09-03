import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemon, getNextPokemon } from "../redux/features/pokedex";
import pokedexImg from "../assets/pokedex.png";

function Homepage() {
  const dispatch = useDispatch();
  const { loading, curPokemon, nextPokemon, pokeName } = useSelector(
    (state) => state.pokedex
  );
  useEffect(() => {
    dispatch(getPokemon(nextPokemon));
  }, []);

  return (
    <div id="Homepage" className="w-screen h-screen relative">
      <img
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        src={pokedexImg}
        alt="pokedex"
      />
      {loading ? (
        ""
      ) : (
        <span className="absolute top-[17.5rem] left-[44rem] -rotate-2 text-3xl text-white">
          {pokeName}
        </span>
      )}
      <button
        className="w-[5.4rem] h-8 absolute top-[31.7rem] left-[41.3rem] -rotate-2 rounded text-white hover:bg-gray-500"
        onClick={() => {
          dispatch(getPokemon(nextPokemon));
        }}
      >
        Next
      </button>
      <button></button>
      {/* <span>
        Current Pokemon Id: {curPokemon} <br /> Next Pokemon Id: {nextPokemon}
      </span> */}
    </div>
  );
}

export default Homepage;
