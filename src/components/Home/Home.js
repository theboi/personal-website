import React from 'react';
import style from './Home.module.css'
import S1Line from './S1Line/S1Line'

const Home = () => {
    return (
        <div>
            <section className={style.s1}>
                <S1Line weight="w900" />
            </section>
        </div>
    )
}

export default Home;