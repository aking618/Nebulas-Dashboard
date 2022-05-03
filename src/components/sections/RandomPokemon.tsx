import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Convert, Pokemon } from "../../models/Pokemon";

const RandomPokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  const textStyle = {
    fontFamily: "JetBrains Mono",
  };

  useEffect(() => {
    var pokemonNumber = Math.floor(Math.random() * 898);

    const fetchPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
      );

      const data = await res.json();
      const pokemon = Convert.toPokemon(data);
      setPokemon(pokemon);
      setLoading(false);

      console.log("Pokemon:", pokemon);
    };
    fetchPokemon();
  }, []);

  const formatPokemonValue = (value: any) => {
    console.log("Value:", value);
    var valueList = value.split("-");

    for (var i = 0; i < valueList.length; i++) {
      valueList[i] =
        valueList[i].charAt(0).toUpperCase() + valueList[i].slice(1);
    }
    return valueList.join(" ");
  };

  return (
    <div style={{ padding: "1rem" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        pokemon && (
          <>
            <Grid container direction="row">
              {/* Column 1 */}
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography
                    align="center"
                    variant="h4"
                    style={textStyle}
                    key={pokemon.name}
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Typography>
                </Grid>
                <Grid item>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </Grid>
                <Grid item>
                  <Typography align="center" variant="h6" style={textStyle}>
                    Pokedex Number: {pokemon.id}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="center" variant="h6" style={textStyle}>
                    Types:{" "}
                    {pokemon.types.map((type) => (
                      <img
                        src={`https://serebii.net/pokedex-bw/type/${type.type.name}.gif`}
                        alt={type.type.name}
                        key={type.type.name}
                        style={{
                          marginRight: "0.5rem",
                          ...textStyle,
                        }}
                      />
                    ))}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="center" variant="h6" style={textStyle}>
                    Abilities:{" "}
                    {pokemon.abilities.map((ability) => (
                      <Typography
                        align="center"
                        style={{
                          margin: 0,
                          marginLeft: "0.5rem",
                          fontSize: "1rem",
                          lineHeight: 1,
                        }}
                        key={ability.ability.name}
                      >
                        {formatPokemonValue(ability.ability.name)}
                        {ability.is_hidden ? " (Hidden)" : ""}
                      </Typography>
                    ))}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="center" variant="h6" style={textStyle}>
                    Stats:{" "}
                    {pokemon.stats.map((stat) => (
                      <Typography
                        style={{
                          margin: 0,
                          marginLeft: "0.5rem",
                          fontSize: "1rem",
                          lineHeight: 1,
                        }}
                        key={stat.stat.name}
                      >
                        {formatPokemonValue(stat.stat.name)}: {stat.base_stat}
                      </Typography>
                    ))}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </>
        )
      )}
    </div>
  );
};

export default RandomPokemon;