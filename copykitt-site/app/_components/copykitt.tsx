'use client'
import React from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import logo from "../public/copykitt_logo.svg"



const Copykitt: React.FC=()=>{

    const CHARACTER_LIMIT:number =32
    //const ENDPOINT: string="http://127.0.0.1:8000/generate_snippet_and_keywords"; for local host
    const ENDPOINT: string="https://copykitt.onrender.com/generate_snippet_and_keywords" //for render.com hostting service

    const [prompt, setPrompt] = React.useState("");
    const [snippet,setSnippet]=React.useState("");
    const [keywords, setKeywords]=React.useState([]);
    const [hasResults, setHasResults]=React.useState(false);
    const [isLoading, setIsLoading]=React.useState(false);

    const onSubmit = () => {
        console.log("Submitting " + prompt);
        setIsLoading(true);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
        .then(response => {return response.json()})
        .then(onResult);
    };

    const onResult = (data: any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setHasResults(true);
        setIsLoading(false);
    };

    const onReset = ()=>{
        setPrompt("");
        setHasResults(false);
        setIsLoading(false);
    }

    let displayedElement=null;
    if (hasResults)
        {displayedElement=(<Results snippet={snippet} keywords={keywords} onBack={onReset} prompt={prompt}/>);}
    else{displayedElement=<Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT}/>}

    const gradientTextStyle =
        "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto";

    
    return (
    <div className="h-screen flex items-center justify-center">
        <div className=" max-w-md mx-auto p-2">
            <div className= "bg-slate-800 p-6 rounded-md text-white">            
            <div className="flex flex-col items-center justify-center my-6">
                <Image src= "copykitt_logo.svg" alt="copykitt logo" width={42} height={42}/>
                <h1 className={gradientTextStyle+"text-3xl font-bold"}>CopyKitt</h1>
                <div className={gradientTextStyle+"text-3xl font-light"}>Your AI branding assistant</div>
            </div>
            
            {displayedElement}
            </div>
        </div>
    </div>
    )
}

export default Copykitt;