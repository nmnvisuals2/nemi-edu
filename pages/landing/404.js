import { Spacer } from "@nextui-org/react";
import DefaultLayout from "../../layout/DefaultLayout";

export default function NotFound(){

    return <DefaultLayout>
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center">

            <p className="text-6xl font-bold text-primary">404</p>
            <Spacer y={2}></Spacer>
            <p className="text-sm">The page you are trying to access is not found or has been deleted</p>
        </div>
    </DefaultLayout>
}