import Header from "@/components/Header";
import Template from "@/components/Template";
import Title from "../components/Title";

function Skill() {
  const skills:string[]=[
    "C",
    "javascript",
    "php",
    "python"
]
    return (
        <>
          <Title
          title={"スキル"}
          detail={"私が持っているスキルです。"}
          />
          <Header home={true}/> 
          <Template
          title={'スキル'}>
              {skills.map((item:string,index:number)=>(
                <li 
                key={index}
                style={{
                    fontSize:"20px",
                    marginTop:"20px"
                }}>
                  {item}
                </li>
            ))} 
         
          </Template>
        </>
    );
}

export default Skill;