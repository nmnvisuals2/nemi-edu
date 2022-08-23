import styles from './ProfileCard.module.css'

function ProfileCard(props){

    return(<div className={styles.profile_wrapper} onMouseOver={()=>props.handleMouseOver(true)} onMouseOut={()=>{props.handleMouseOver(false)}}>


        <div style={{backgroundImage: "url("+ props.image +")"}} className={styles.image}></div>
        <img src={props.badge} className={styles.badge}/>
        <div className={styles.content}>
<h2>{props.name}</h2>
<p>{props.role}</p>
<a href={props.link}><img src="/open_arrow.svg" className={styles.open}/></a>
        </div>
    </div>)
}

export default ProfileCard;