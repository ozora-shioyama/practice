import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Link from 'next/link'
import Button from '@mui/material/Button'


type linkdata={
  linkname: string;
  pagename: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mypages:linkdata[]=[
    {
      linkname:"/Profile",
      pagename:"プロフィール"
    },
    {
      linkname:"/Skill",
      pagename:"スキル"
    }
  ]
  return (
    <>
      <Head>
        <title>自己紹介サイト</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header home={false}/>
      <div className='text-center container'>
        <h1>hello</h1>
        <ul style={{padding:0}}>
      {mypages.map((item:linkdata,index:number)=>(
        <li key={index} style={{listStyle:"none"}}>
          <Link
            href={item.linkname}
          >
            <Button variant="contained" style={{marginTop:"10px"
            }}>{item.pagename}</Button>       
          </Link>
          
        </li>  
      ))}
      </ul>
      </div>
     
      

    </>
      )
}
