import { SignedIn, SignIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FileIcon, FilePlusIcon, FileUpIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <Link href={'/dashboard'}>
          <h1 className="text-xl font-semibold">
            {" "}
            Chat to <span className="text-indigo-600">PDF</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2">
        
        <SignedIn >
        <Button asChild variant="link">
                <Link href={'/dashboard'}>Pricing</Link>
            </Button>
            <Button asChild variant="outline">
                <Link href={'/dashboard'}>My Documents</Link>
            </Button>
            <Button asChild variant="outline" size={"lg"}>
                <Link href={'/dashboard'}><FilePlusIcon color="blue" /> </Link>
            </Button>
        <UserButton />
        </SignedIn>
         
        </div>
      </div>
    </div>
  );
}
