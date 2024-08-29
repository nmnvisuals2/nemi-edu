import DefaultLayout from "../../layout/DefaultLayout"
import { supabase } from "../../utils/supabaseClient"

export default function LandingPage({data}){

return <DefaultLayout>
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
</DefaultLayout>
}

export async function getServerSideProps(context){

const {data,error} = await supabase.from('landing').select('*').eq('slug',context.query.slug)


if(error){
    return {notFound:true}
}

    return {props:{data:data[0]}}
}