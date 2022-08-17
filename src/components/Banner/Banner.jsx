import style from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={style.banner}>
            <img src="img/Avengers.png" alt="Avengers"/>
            <div className={style.bannerText}>
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src="img/Avengers_logo.png" alt="Avengers logo"/>
        </div>
    )
}

export default Banner;