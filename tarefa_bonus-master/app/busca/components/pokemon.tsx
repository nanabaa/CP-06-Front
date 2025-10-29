interface PokemonProps{
    pname: string,
    image: string,
    dexnumber: number,
    types: [],
    hp: number
}

const pokemonCard = ({pname, image, dexnumber, types, hp }: PokemonProps) => {


    return(
        <>
        <div className="p-4 m-4 bg-white border-neutral-400 content-center flex flex-col">
            <img src={image} alt="" />
            <h3>#{dexnumber} - {pname}</h3>
            <p>hp - {hp} {types?.length ? types.map((t, i) => (
                <p key={i}>{t}</p>
            )): null}</p>

        </div>
        </>
    )
}

