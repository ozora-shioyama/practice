import Header from '@/components/Header';
import Template from '@/components/Template';
import Head from 'next/head'
import Title from '../components/Title';
export type profiledata={
    question: string;
    answer: string;
}

const Profile = () => {
    const data:profiledata[]=[
        {
            question:"名前",
            answer:"塩山大空"
        },{
            question:"誕生日",
            answer: "1999/6/21"},
          {
            question:"好きな店",
            answer: "道"
          }  
        
    ]

    return(
        <>
         <Title
          title={'プロフィール'}
          detail={'プロフィールのページです。'}
          />
          <Header home={true}/>
          <Template title={'プロフィール'}>
          {data.map((item:profiledata,index:number)=>(
                <li 
                key={index}
                style={{
                    fontSize:"20px",
                    marginTop:"20px"
                }}>
                    {item.question}: <span style={{color:"green"}}>{item.answer}</span>
                </li>
            ))} 
          </Template>
        </>
    
    );
}


export default Profile;