function SavedDetails(props) {
    return (
        <>
            {props.notes.map(function (elem, idx) {
                return (
                    <div key={idx} className="showDetails p-2 text-black">{elem.details} </div>)
            })}
        </>

    )
}

export default SavedDetails