import React from 'react';
import * as styles from '../style/style.css';

class Preloader extends React.Component {
    render() {

        return (
            <React.Fragment>
                <div id="preloader">
                    <div id="status">
                        <div className="sk-cube-grid">
                            <div className="sk-cube sk-cube1"></div>
                            <div className="sk-cube sk-cube2"></div>
                            <div className="sk-cube sk-cube3"></div>
                            <div className="sk-cube sk-cube4"></div>
                            <div className="sk-cube sk-cube5"></div>
                            <div className="sk-cube sk-cube6"></div>
                            <div className="sk-cube sk-cube7"></div>
                            <div className="sk-cube sk-cube8"></div>
                            <div className="sk-cube sk-cube9"></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Preloader;