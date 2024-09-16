import { LogInIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import LogoutButton from "../buttons/log-out-button/log-out-button";
import { verifySession } from "@/lib/session";
import IconButton from "../buttons/icon-button/icon-button";

const Header = async () => {
    const session = await verifySession();
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

            {session ? (
                <div>
                    <IconButton
                        icon={<UserIcon color="white" />}
                        href="/profile"
                    />
                    <LogoutButton />
                </div>
            ) : (
                <div>
                    <IconButton
                        icon={<LogInIcon color="white" />}
                        href="/login"
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
