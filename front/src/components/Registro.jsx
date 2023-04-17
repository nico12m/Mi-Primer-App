export const Registro=()=>{
    return(
        <div>
            <h1>Estas en registro</h1>
            <div>
                <label>Nombre: </label>
                <input type="text" />
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" />
            </div>
            <div>
                <label>Usuario: </label>
                <input type="text" />
            </div>
            <div>
                <button onSubmit={""}>Registrar</button>
            </div>
        </div>
    )
};