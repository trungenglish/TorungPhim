"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthModalProps = {
    isOpen: boolean
    onClose: () => void
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [mode, setMode] = useState<"login" | "register">("login");

    const showLogin = () => setMode("login");
    const showRegister = () => setMode("register");

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="min-[990px]:max-w-[860px]! min-h-[calc(100%-3.5rem*2)] p-0">
                <div className="flex w-full py-16 pr-16 pl-[calc(420px+4rem)] min-h-[400px] bg-[#1E2545] border-none rounded-xl text-[#fff9]
                                relative flex-col
                                before:absolute before:top-0 before:left-0 before:bottom-0 
                                before:w-[360px] before:bg-[url('https://www.rophim.mx/images/rophim-login.jpg')] 
                                before:bg-cover before:bg-[position:0_100%] before:rounded-l-xl 
                                sm:before:w-[420px]"
                    >
                    {/* Right Side */}
                    {mode === "login" ? (
                        <LoginForm onSwitchToRegister={showRegister} />
                    ) : (
                        <RegisterForm onSwitchToLogin={showLogin} />
                    )}

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthModal;