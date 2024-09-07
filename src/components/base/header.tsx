import { UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="flex w-full justify-between p-4 z-50 fixed bg-black bg-opacity-30">
            <div>placeholder</div>

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
