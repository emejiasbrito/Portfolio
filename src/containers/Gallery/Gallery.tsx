import React from "react";
import Card from "../../components/Card/Card";
import { listPortfolio } from "../../constants/constants";
import './style/Gallery.css'


const Gallery = () => {
    return (
        <div className="Gallery">
            <div className="gallery-container">
                { listPortfolio.map((e:IListApp) =>
                    <div key={e.link} className="item">
                        <Card data={e} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery