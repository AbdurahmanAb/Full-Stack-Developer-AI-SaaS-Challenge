import { Button } from "@/components/ui/button";
import {
  GlobeIcon,
  ZapIcon,
  BrainCogIcon,
  EyeIcon,
  ServerCogIcon,
  MonitorSmartphoneIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      name: "keep all your important pdf files securely stored and easily accessible anytime, anywhere",
      description:
        "Store your crucial PDF files securely and enjoy seamless access from anywhere, at any time",
      icon: GlobeIcon,
    },
    {
      name: "Sizzling fast responses",
      description:
        "Experiene lightening-fast asnwers to your queries ensuring you get hte information you need instantly ",
      icon: ZapIcon,
    },
    {
      name: "store your PDF description",
      description:
        "Store your crucial PDF files securely and enjoy seamless access from anywhere, at any time",
      icon: GlobeIcon,
    },
    {
      name: "Chat Memorisation",
      description:
        "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience",
      icon: BrainCogIcon,
    },
    {
      name: "Interactive PDF viewer",
      description:
        "Engage with your PDFs like never beforeusing our intuitive and interactive viewer ",
      icon: EyeIcon,
    },
    {
      name: "Cloud Backup",
      description:
        "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage",
      icon: ServerCogIcon,
    },
    {
      name: "Responsive Across Devices",
      description:
        "Acces and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet or smartphone",
      icon: MonitorSmartphoneIcon,
    },
  ];
  return (
    <main className=" flex-1 p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-400">
      <div className="bg-white rounded-md drop-shadow-xl py-28 lg:py-32">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center flex flex-col">
            <h2 className=" text-indigo-600 leading-7 font-semibold ">
              Your Interactive Document Comapnion{" "}
            </h2>
            <p className="my-3 font-bold lg:text-6xl text-3xl capitalize">
              Transform your PDFs into interactive Conversation
            </p>
            <p className="text-xl my-8">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF</span>
            </p>

            <p className="my-8 text-lg  font-extralight">
              Upload your document, and our chatbot will answer questions,
              summarize content, and answer all your Qs. Ideal for everyone,{" "}
              <span className="text-indigo-600">Chat with PDF </span> turns
              static documents into{" "}
              <span className="font-bold"> dynamic conversations</span>,
              enhancing productivity 10x fold effortlessly,
            </p>
            <Button className="self-center" asChild>
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
          </div>
          <div className="my-8">
            <Image
              src={"/asset/asset.jpeg"}
              width={2432}
              height={2432}
              alt="pdf-chat"
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-4xl my-10 font-bold text-center">
              Features
            </h2>
           <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7 place-content-center place-items-center">
            {features.map((feature, index) => (
                  <div key={index} className="flex gap-5 ">
                    <feature.icon size={55} className="text-indigo-600"/>
                    <div >
                    
                      <p>{feature.description}</p>
                    </div>
                  </div>
            ))}         
           </div>
          </div>
        </div>
      </div>
    </main>
  );
}
