import './About.css'
import Header from "../Header/Header";
import {useSelector} from "react-redux";



function About(props){
    const selector = useSelector(state => state.data)
    return (
        <>
            <Header/>
        <div  className="wrapper_about">
            <div className="about_content">
                <img className="about_logo" src={selector.img} alt=""/>
                <div className="about_content_text">
                    <h1>Name : <span>{selector.name}</span></h1>
                    <h3>Actors : <span>{selector.scenarist}</span></h3>
                    <h3>Genre : <span>{selector.genre}</span></h3>
                    <h3>Year : <span>{selector.year}</span></h3>
                    <h3 className="rank" >Rank : <span>{selector.rank}</span></h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default About