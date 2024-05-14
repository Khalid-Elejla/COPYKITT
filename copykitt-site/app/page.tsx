import Image from "next/image";

import { Metadata } from 'next'
import Copykitt from "./_components/copykitt";



export const metadata: Metadata = {
 title: 'Copykitt App',
 description:'Generate branding snippets and keywords for your product',
}

export default function Home() {
  return (
    <>
    <main>
      <Copykitt />
    </main>
    </>
    
    
  );
}

//className="flex min-h-screen flex-col items-center justify-between p-24"