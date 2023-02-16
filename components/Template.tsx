import React,{FC, ReactNode} from "react"
type props={
    title:string;
    children: ReactNode;
}
const Template:FC<props> = ({title,children}) => {
    return (
        <div className='container text-center'>
            <h1>{title}</h1>
            <ul style={{
                listStyle:"none",
                padding: 0
            }}>
            {children}
            </ul>
          </div> 
    );
}

export default Template;