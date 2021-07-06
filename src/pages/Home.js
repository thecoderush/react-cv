import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <>
            <div className="home">
                <Navigation />
                <div className="homeContent">
                    <div className="content">
                        <div className="name">thecoderush</div>
                        <h2>Développeur Front-end</h2>
                        <div className="pdf">
                            <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;