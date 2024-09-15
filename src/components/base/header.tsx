import { LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LogoutButton from "../buttons/log-out-button/log-out-button";

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
                <LogoutButton />
            </div>
        </header>
    );
};

export default Header;
