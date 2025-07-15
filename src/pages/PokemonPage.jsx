import "./PokemonPage.css"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { PokemonContext } from "../context/pokemon.context";

function PokemonPage() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    const { fetchPokemon } = useContext(PokemonContext);

    useEffect(() => {
        getPokemon(id);
    }, [id]);

    const getPokemon = async (id) => {
        try {
            const data = await fetchPokemon(id);
            setPokemon(data);
        } catch (e) {
            setError(e);
        }
    }

    const goTo = (id) => {
        navigate(`/pokemons/${id}`);
    }

    return (
        <section id="pokemon-page">
            {error ? (
                <div>
                    <h2>No se ha encontrado ningún Pokémon</h2>
                    <Link to="/pokemons">Volver a la lista de Pokemons</Link>
                </div>
            ) : (
                <>
                    {pokemon ? (
                        <div>
                            <h2>{pokemon.name.toUpperCase()}</h2>
                            <img
                                src={pokemon.sprites.front_default}
                                alt="pokemon img"
                                className="pokemon-img" />
                            <h3>HP: {pokemon.stats[0].base_stat}</h3>
                            <h3>Attack: {pokemon.stats[1].base_stat}</h3>
                            <h3>Defense: {pokemon.stats[2].base_stat}</h3>
                            <div className="link-buttons">
                                <button onClick={() => goTo(Number(id) - 1)} className="btn">Anterior</button>
                                <button onClick={() => goTo(Number(id) + 1)} className="btn">Siguiente</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2>Cargando...</h2>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

export default PokemonPage