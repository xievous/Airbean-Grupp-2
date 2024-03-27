
function StatusComponent(props) {
    return (
        <div>
            <p>Ordernummer: {props.orderNr}</p>
            <h1>Din beställning är på väg!</h1>
            <h2>{props.eta} minuter</h2>
            <button>Ok, cool!</button>
        </div>
    )
}

export default StatusComponent