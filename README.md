# Copykitt:

This is a SaaS application that generates AI branding snippets and keywords for the customer's brand. 
It is a full stack application, and created as a tutorial for how to create AI driven full-stack
SaaS apps.

## Examples

Try out the demo here (the first time you try this web app could take a few seconds more to work): 
https://copykitt-theta.vercel.app/

![copykitt_results_image](./images/copykitt_results.png)

## Lambda Layer ZIP

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

| Checkpoint                  |                                                              |
| --------------------------- | ------------------------------------------------------------ |
| Python app to call OpenAI   | [1e88180](https://github.com/pixegami/copykitt-tutorial/commit/1e88180dc55b5c10c869c32fe7bd168412a3c187) |
| Add FastAPI to Python app   | [aabaa16](https://github.com/pixegami/copykitt-tutorial/commit/aabaa16b036a921c7787dfabe6d6e80b65a7549c) |
| Host API on AWS             | [174d14f](https://github.com/pixegami/copykitt-tutorial/commit/174d14f8f5477c7b928445088951b2135f123a72) |
| Create NextJS/React website | [d1007b3](https://github.com/pixegami/copykitt-tutorial/commit/d1007b314a754f84573bf2b7281ae5ebebeb3d29) |
| Styling with TailwindCSS    | [818d04b](https://github.com/pixegami/copykitt-tutorial/commit/818d04bc670d23db24f95d1647aaa1fcbf90b474) |

## 