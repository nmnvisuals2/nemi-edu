import styles from './CourseSingle.module.css'
import {useRouter} from 'next/router'

function CourseSingle(){


    const router = useRouter();
    const slug = router.query;
console.log(slug);
    return(<div></div>)
}


