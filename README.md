# Copykitt:

This is a SaaS application that generates AI branding snippets and keywords for the customer's brand. 
It is a full stack application, and created as a tutorial for how to create AI driven full-stack
SaaS apps.

## Examples

Try out the demo here (the first time you try this web app could take a few seconds more to work): 
https://copykitt-theta.vercel.app/



I've decided to deploy the backend at render.com
so, in case hosting your backsite in different hosting service you can modify Entry point in copykitt-site\app\page.tsx
const ENDPOINT: string="https://copykitt.onrender.com/generate_snippet_and_keywords" //for render.com hostting service
 
also copykitt_infra contains the required files to build the infra structure for aws hosting of your api, you need to depoly it and just change the previously mentioned ENDPOINT constant
## Tech Stack

#### Backend Stack

| Type      | Tech                                                         |
| --------- | ------------------------------------------------------------ |
| Language  | [Python](https://www.python.org/)                            |
| Framework | [FastAPI](https://fastapi.tiangolo.com/)                     |
| Hosting   | [AWS](https://aws.amazon.com/) (Lambda + API Gateway)        |
| Other     | [OpenAI](https://openai.com/), [AWS CDK](https://aws.amazon.com/cdk/), [Docker](https://www.docker.com/) |

#### Frontend Stack

| Type      | Tech                                                         |
| --------- | ------------------------------------------------------------ |
| Language  | [Typescript](https://www.typescriptlang.org/)                |
| Framework | [NextJS](https://nextjs.org/) / [React](https://reactjs.org/) |
| Styling   | [TailwindCSS](https://tailwindcss.com/)                      |
| Hosting   | [Vercel](https://vercel.com)                                 |

## Tutorial Checkpoints

I've also added each part of the tutorial as a separate commit so it's easier to follow.


## 