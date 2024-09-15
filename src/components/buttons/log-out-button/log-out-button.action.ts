"use server";
import { logout } from "@/lib/auth";

export async function handleLogout() {
    await logout();
}
