const Recipe = (props) => {
    return (
        <div key={props.key}>
            {props.title}
            {props.indgredients}
            {props.instructions}
        </div>
    )
}

export default Recipe