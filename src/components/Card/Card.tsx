import React from "react";
import './style/Card.css'


const Card = ({data}:ICardProps) => {
    return (
        <div className="Card">
            <div className="card-container">

                <a href={data.link} target='_blank' rel="noreferrer">
                    <img src={data.img} alt='data.img' />

                    <div className="container-description">
                        <div className="description" title="description">
                            {data.description}
                        </div>
                    </div>
                </a>

                <div className="footer">
                    <div className="skill">
                        {data.skill.map((el:string) =>
                            <span key={el} title={el}>{el}</span>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card