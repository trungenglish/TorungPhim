"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { closeModal } from "@/store/slices/authModalSlice";

const AuthModal = () => {
    const dispatch = useAppDispatch()
    const { isOpen, type } = useAppSelector((state) => state.auth)

    return (
        <Dialog open={isOpen} onOpenChange={() => dispatch(closeModal())}>
            <DialogContent className="min-[990px]:max-w-[860px]! min-h-[calc(100%-3.5rem*2)] p-0">
                <div className="flex w-full py-16 pr-16 pl-[calc(420px+4rem)] min-h-[400px] bg-[#1E2545] border-none rounded-xl text-[#fff9]
                                relative flex-col
                                before:absolute before:top-0 before:left-0 before:bottom-0 
                                before:w-[360px] before:bg-[url('https://www.rophim.mx/images/rophim-login.jpg')] 
                                before:bg-cover before:bg-[position:0_100%] before:rounded-l-xl 
                                sm:before:w-[420px]"
                    >
                   
                   {type === 'login' && <LoginForm />}
                   {type === 'register' && <RegisterForm />}
                  

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthModal;