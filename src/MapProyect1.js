import React from "react";
import "./MapProyect.css";
class MapProyect1 extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {this.props.xabar.map(value => (
                    <div className="container">
                        <div className="bg_img">
                            <img src={value.src} />
                            <div className="btns">
                                <button>{value.titleLeft}</button>
                                <button>{value.titleRight}</button>
                            </div>
                        </div>
                        <div className="main">
                            <h2>{value.title}</h2>
                            <h3>{value.text}</h3>
                            <div className="iconks">
                                <div className="box">
                                    <div className="iconc"><img src={value.src1} /></div>
                                    <h3>{value.commit}</h3>
                                </div>
                                <div className="box">
                                    <div className="iconc"><img src={value.src2} /></div>
                                    <h3>{value.commit2}</h3>
                                </div>
                                <div className="box">
                                    <div className="iconc"><img src={value.src3} /></div>
                                    <h3>{value.commit3}</h3>
                                </div>
                                <div className="box">
                                    <div className="iconc"><img src={value.src4} /></div>
                                    <h3>{value.commit4}</h3>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="main_footer">
                            <div className="footer">
                                <h3><del>{value.price}</del></h3>
                                <h2>{value.newPrice}</h2>
                            </div>
                            <div className="iconk_img">
                                <img src={value.zoomImg} /><img src={value.love} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default MapProyect1