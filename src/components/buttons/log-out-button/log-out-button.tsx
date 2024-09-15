// components/LogoutButton.tsx
"use client";

import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";

import { handleLogout } from "./log-out-button.action";

const LogoutButton = () => {
    return (
        <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut color="#f4f4f5" />
        </Button>
    );
};

export default LogoutButton;
