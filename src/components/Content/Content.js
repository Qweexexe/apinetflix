import './Content.css'
import Element from "../Element/Element";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";

function Content() {
    const [data, setData] = useState([])
    const selector = useSelector(state => state.reducer.field)
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${selector}`
    console.log(data)
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'abd286ccabmsh4a87e28ab09553bp19a4fejsn09fd85330506',
		        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}})
        .then(response => response.json())
        .then(data => setData(data.d))

    }, [selector])

    return (
        <div className="content_wrapper">
            {data.map(el => (<Element
                key={el.id}
                name={el.l}
                scenarist={el.s}
                genre={el.q}
                year={el.y}
                rank={el.rank}
                img={el.i && el.i.imageUrl}
            >
            </Element>))}
        </div>
    )
}

export default Content
