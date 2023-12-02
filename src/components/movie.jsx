import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Movie(props) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${props.title}`, {
            state: { ...props }, // props의 모든 속성을 state로 전달
        });
        console.log(props); // props 내용 확인
    };

    return (
        <div className="movie-container" onClick={onClickMovieItem}>
            <img src={props.poster_path} alt="영화포스터" />
            <div className="movie-info">
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
            </div>
        </div>
        );
}
