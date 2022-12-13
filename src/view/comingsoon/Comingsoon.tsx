import "./Comingsoon.styles.css";

export function Comingsoon() {
    return (
     <div className="col-sm-12">
                <div className="row coming mx-0">
                    <div className="col-sm-6 comeimgimg">
                        <img src={require('../../asset/img/coming-soon.png')}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-sm-6">
                        <img src={require('../../asset/img/coming-soon-text.png')}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
    );
}







