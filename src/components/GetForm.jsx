import { useState } from "react"

function GetForm(props) {
    // Estados para almacenar los valores de los inputs "from" y "to"
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(10);

    // Maneja el cambio en el input "from"
    const handleFromInput = (e) => {
        setFrom(e.target.value);
    }

    // Maneja el cambio en el input "to"
    const handleToInput = (e) => {
        setTo(e.target.value);
    }

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene que la página se recargue
        // Llama a la función getPokemons con los valores ingresados
        props.getPokemons(from, to);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                {/* Input para el número de inicio */}
                <label htmlFor="from-pokemon">From:</label>
                <input type="number" id="from-pokemon" onChange={handleFromInput} min={1} />
            </fieldset>
            <fieldset>
                {/* Input para el número final */}
                <label htmlFor="to-pokemon">To:</label>
                <input type="number" id="to-pokemon" onChange={handleToInput} min={1} />
            </fieldset>

            {/* Botón para enviar el formulario */}
            <button>Get Pokemon!</button>
        </form>
    )
}


export default GetForm