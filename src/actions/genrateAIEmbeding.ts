"use server"

import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";


export async function genrateAIEmbeding(docId:string) {
    auth().protect(); // Protect this route with authentication

    //turn pdf to embedings
   await generateEmbedingsInPinconevectorStore(docId);

   revalidatePath(`/dashboard`);

   return {completed:true} }

}