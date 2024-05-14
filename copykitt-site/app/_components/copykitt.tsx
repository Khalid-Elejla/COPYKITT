'use client'
import React from "react";
import Form from "./form";
import Results from "./results";



const Copykitt: React.FC=()=>{

    const CHARACTER_LIMIT:number =32
    const ENDPOINT: string="http://127.0.0.1:8000/generate_snippet_and_keywords";

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

    
    
    return (
    <>
    <h1>CopyKitt!</h1>
    {displayedElement}
    </>
    )
}

export default Copykitt;