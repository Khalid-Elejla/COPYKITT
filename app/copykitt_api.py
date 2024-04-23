from fastapi import FastAPI, HTTPException
from copykitt import generate_branding_snippet, generate_keywords

app = FastAPI()

MAX_INPUT_LENGTH = 32

def validate_input_length(prompt:str) -> bool:
    if len(prompt)<=MAX_INPUT_LENGTH:
        pass
    else:
        raise HTTPException(status_code=400, detail=f"your input length is too long must be equal or less than {MAX_INPUT_LENGTH}")
    
@app.get("/generate_snippet")
async def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    snippet=generate_branding_snippet(prompt)
    return {"snippet": snippet, "keywords":[]}

@app.get("/generate_keywords")
async def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    keywords=generate_keywords(prompt)
    return {"snippet": None, "keywords": keywords}

@app.get("/generate_snippet_and_keywords")
async def generate_snippet_and_keywords_api(prompt:str):
    validate_input_length(prompt)
    snippet=generate_branding_snippet(prompt)
    keywords=generate_keywords(prompt)
    return {"snippet": snippet, "keywords": keywords}