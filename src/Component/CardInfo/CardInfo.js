import React from 'react';
import './CardInfo.css'
const CardInfo = () => {
    return (
        <div className="col-md-3">       
   
            <div className="mainDive">
                <div className="folotig">
                    <div className="letSite">#2</div>
                    <div className="rightSite">
                        <a href="">Edit</a>
                        <a href="">Delte</a>
                    </div>
                </div>
                <div className="midle">
                    <p>FirstName: Remon</p>
                    <p>LastName: roy</p>
                    <p>Email: remonroy34@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default CardInfo;