import "./App.css";
const characterDescriptions = {
  "Eren Jaeger": "Desde pequeño, sueña con explorar el mundo más allá de las murallas.",
  "Mikasa Ackerman": "Es una de las combatientes más fuertes del Cuerpo de Exploración.",
  "Armin Arlert": "Tiene un gran intelecto y a menudo usa la estrategia para salvar a sus amigos.",
  "Levi Ackerman": "Es conocido por su extraordinaria habilidad para matar titanes con gran eficiencia.",
  "Reiner Braun": "Es un líder natural entre sus compañeros, conocido por su fuerza física.",
  "Annie Leonhart": "Tiene un estilo de lucha característico que combina artes marciales con sus habilidades de combate.",
  "Zeke Jaeger": "Tiene una gran afinidad por la estrategia militar y se le considera un genio en el campo de batalla.",
  "Historia Reiss": "Es una persona amable y compasiva, a pesar de las dificultades de su vida.",
  "Ymir": "Tiene un pasado misterioso y una fuerte lealtad hacia Historia Reiss.",
  "Falco Grice": "Es un joven con un gran sentido de justicia y empatía, incluso en tiempos difíciles.",
  "Gabi Braun": "Es decidida y extremadamente talentosa, mostrando gran habilidad en combate desde una edad temprana.",
  "Pieck Finger": "Es extremadamente astuta y siempre se muestra tranquila incluso en situaciones peligrosas.",
};



function Juanjo () {
    // const lista = Object.keys(characterDescriptions).map((personaje)=>({
    //   name:personaje,
    //   descripcion:characterDescriptions[personaje]
    // }) ) 

    const lista=[]
    for (let personaje of Object.keys(characterDescriptions)) {
      let object_personaje={}
      object_personaje.name=personaje
      object_personaje.descripcion=characterDescriptions[personaje]
      lista.push(object_personaje)
    }

    return (
        <CharactersGrid
        tarjetas= {lista}
        />
    )
}


function CharactersGrid (obj) {
  const style_grid={
    display:"grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "1.5rem",
    width: "80vw",
    margin:"auto"
  }

  return (
    <div style={style_grid}>

    {obj.tarjetas.map(function(objeto_personaje) {
      return(
      <div style={{
        border:"0.1rem solid black",
        padding: "1.5rem",
        borderRadius:"2rem"
      }}
      key={objeto_personaje.name}>
        <h2>
          {objeto_personaje.name}

        </h2>
         
        <p>
          {objeto_personaje.descripcion}
        </p>
      </div>
      )
    })
    }
    </div>
  )

}



export default Juanjo
