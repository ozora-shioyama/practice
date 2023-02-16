import Head from "next/head";
import { FC } from "react";

type Props={
    title:string;
    detail: string;
}

const Title:FC<Props> = ({title,detail}) => {
    return (
        <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content={detail} />
        </Head>
        </div>
    );
}

export default Title;