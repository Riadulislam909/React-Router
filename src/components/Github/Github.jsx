import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    // const [data, setData]= useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Riadulislam909")
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // }, [])
    const data = useLoaderData();
    return (
        <div className="flex items-center text-center justify-center  bg-slate-700">
            <img className="flex order-2 justify-center items-center rounded-xl h-60 w-auto" src={data.avatar_url} alt="GitImg" />
        <div className="flex items-center justify-center text-center m-4 text-yellow-50 text-3xl order-1">
          Gittub Username: {data.login}  
        </div>
        </div>
    );
};

export default Github;

export const gitHubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/Riadulislam909')
    return response.json();
}