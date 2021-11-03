import React from 'react';

import { useTheme } from '../context/themeContext';

const Home = () => {
    const { changeTheme }: any = useTheme()

    return (
        <div onClick={() => changeTheme()}>
            Home
        </div>
    )
}

export default Home
