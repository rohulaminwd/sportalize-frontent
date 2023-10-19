"use client"

import Lottie from 'lottie-react';
import footballLoading from '../../assets/lottie/football-loading.json'

const FootballLoading = () => {
    return (
        <div>
            <Lottie
                animationData={footballLoading}
                loop={true}
                style={{ height: "100%" }}
            />
        </div>
    );
};

export default FootballLoading;