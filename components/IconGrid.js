import styles from './IconGrid.module.css'

function IconGrid(props){
    return(<div className={styles.icon_holder}>
        <img src={props.icon} />
        <div className={styles.content}><h2>{props.content}</h2></div>
    </div>)
}

export default IconGrid;