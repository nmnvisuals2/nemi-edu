import { supabase } from "../../utils/supabaseClient"

export default function LandingPage(){


}

export async function getServerSideProps(context){

const {data,error} = await supabase.from('landings').select('*').eq('slug',context.query.slug)


if(error){
    return {notFound:true}
}

    return {props:{data:data[0]}}
}