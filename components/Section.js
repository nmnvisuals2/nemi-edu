import styles from './Section.module.css'

function Section(props){
    return(<section id={props.id} className={styles.section + " " + (props.full ? styles.full : props.blue? styles.blue : '') + " " + (props.marginned? styles.margin : '')}>{props.blue ? <div className={styles.blue_inner + " " + (props.minus ? styles.neg : '')}>{props.children}</div> : <>{props.children} </>}</section>)
}
export default Section;