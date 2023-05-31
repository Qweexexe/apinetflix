import './Element.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


function Element(props){
    const selector = useSelector(state => state.data)
    const dispatch = useDispatch()
    const actionCreator = (name, scenarist, genre, year, rank, img) => {
  dispatch({
    type: "GET_INFO",
    name: name,
    scenarist: scenarist,
    genre: genre,
    year: year,
    rank: rank,
      img: img
  });
};
    return(
        <div className="element">
            <Link className="element_hyper" to={'/about'}>
                <img
                    className="element_image_logo"
                    onClick={() => actionCreator(
                        props.name,
                        props.scenarist,
                        props.genre,
                        props.year,
                        props.rank,
                        props.img
                    )}
                    src={props.img}
                    alt=""
                />
            <div className="element_content">
                <h1>
                    {props.name}
                </h1>
            </div>
            </Link>
        </div>
    )
}

export default Element