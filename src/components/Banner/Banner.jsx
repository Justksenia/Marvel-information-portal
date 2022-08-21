import style from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={style.banner}>
            <img src="img/Avengers.png" alt="Avengers" className={style.bannerLogoImg}/>
            <div className={style.bannerText}>
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src="img/Avengers_logo.png" alt="Avengers logo" className={style.bannerLogoText}/>
        </div>
    )
}

export default Banner;