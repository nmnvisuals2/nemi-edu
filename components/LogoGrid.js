import styles from './LogoGrid.module.css'

function LogoGrid(props){

    return(<div className={styles.logogrid}>
<div className={styles.cont1}><img src={props.image1}/><img src={props.image2}/></div>
<div className={styles.cont2}><img src={props.image3}/><img src={props.image4}/></div>


    </div>)
}


export default LogoGrid;