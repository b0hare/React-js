import './card.css';

const Card = (props) => {
    return (<div className="Card">
        <img src={props.img} alt="" />
        <h2>{props.user}, {props.age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestias!</p>
    </div>)
}

export default Card;