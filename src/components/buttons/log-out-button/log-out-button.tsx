"use client";

import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";
import { logout } from "./log-out-button.action";

const LogoutButton = () => {
    return (
        <Button
            className="hover:text-zinc-900 hover:bg-zinc-700"
            variant="ghost"
            size="icon"
            onClick={(e) => logout()}
        >
            <LogOut color="#f4f4f5" />
        </Button>
    );
};

export default LogoutButton;
