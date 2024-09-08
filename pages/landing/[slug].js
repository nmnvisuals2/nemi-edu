import DefaultLayout from "../../layout/DefaultLayout"
import { supabase } from "../../utils/supabaseClient"
import NotFound from "./404";

export default function LandingPage({not_found,data}){



    if(not_found){

        return <NotFound></NotFound>
    }

    
return <DefaultLayout>
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
</DefaultLayout>
}

export async function getServerSideProps(context){

const {data,error} = await supabase.from('landing').select('*').eq('slug',context.query.slug).eq('is_active',true)


if(error || data?.length == 0){
    return {props:{data:null,not_found:true}}
}

    return {props:{data:data[0],not_found:false}}
}