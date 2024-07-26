import { auth } from "@clerk/nextjs/server";
import { ChatOpenAI, OpenAI, OpenAIEmbeddings } from "@langchain/openai";
import pineconeClinet from "./pinecone";
import { Index, RecordMetadata } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
});

async function namespaceExists(
  index: Index<RecordMetadata>,
  namespace: string
) {
  if (namespace == null) throw new Error("Namespace is null");
  const { namespaces } = await index.describeIndexStats();
  return namespaces?.[namespace] !== undefined;
}

export const indexname = "chat-pdf";

export async function generateEmbedingsInPineconevectorStore(docId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  let pineconeVecorStore;
  console.log("Generating Embedings for docId", docId);

  const embedings = new OpenAIEmbeddings();

  const index = await pineconeClinet.index(indexname);
  const namespaceAlreadyExist = await namespaceExists(index, docId);
  if (namespaceAlreadyExist) {
    console.log("Namespace already exists");

    pineconeVecorStore = await PineconeStore.fromExistingIndex(embedings, {
      pineconeIndex: index,
      namespace: docId,
    });
    return pineconeVecorStore;
  }else{
    const splitDocs = await generateDocs(docId)
  }
}
