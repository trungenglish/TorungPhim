"use client";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { loginSchema, LoginValues } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod"
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    
    return (
        <Dialog open={true} onOpenChange={onClose} >
            <DialogContent className="min-[990px]:max-w-[860px]! min-h-[calc(100%-3.5rem*2)] p-0">
                <div className="flex w-full py-16 pr-16 pl-[calc(420px+4rem)] min-h-[400px] bg-[#1E2545] border-none rounded-xl text-[#fff9]
                                relative flex-col
                                before:absolute before:top-0 before:left-0 before:bottom-0 
                                before:w-[360px] before:bg-[url('https://www.rophim.mx/images/rophim-login.jpg')] 
                                before:bg-cover before:bg-[position:0_100%] before:rounded-l-xl 
                                sm:before:w-[420px]"
                    >
                    {/* Right Side */}
                    {/* <LoginForm /> */}
                    <RegisterForm />    

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthModal;