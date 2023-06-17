import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)

    if(!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    return (
        <div>
            <Head>
                <title>Profiles</title>
            </Head>
            <p className="text-white text-4xl">Profiles</p>
        </div>
     );
}
 
export default Profiles;