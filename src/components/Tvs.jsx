import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Tvs(props) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/Tvs/${props.name}`, {
            state: { ...props }, 
        });
        console.log(props);
    };

    return (
        <div className="tv-container" onClick={onClickMovieItem}>
            <img src={props.poster_path} alt="티비포스터" />
            <div className="tv-info">
            <h4>{props.name}</h4>
            <span>{props.overview}</span>
            <span>{props.vote_average}</span>
            </div>
        </div>
        );
}