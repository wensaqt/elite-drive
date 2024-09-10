import { UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex w-full justify-between p-4 z-50 bg-black bg-opacity-80">
            <Link href={"/"}>
                <Image
                    src={"/logo_elite_drive.png"}
                    width={150}
                    height={75}
                    alt="logo"
                />
            </Link>

            <div>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/account/profile">
                        <UserIcon color="#f4f4f5" />
                    </Link>
                </Button>
            </div>
        </header>
    );
};

export default Header;
