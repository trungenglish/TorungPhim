import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginSchema, LoginValues } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginValues) => {
    console.log(values);
  };
  return (
    <>
      <div className="mb-4">
        <h4 className="text-[1.4em] font-semibold leading-normal text-white">
          Đăng nhập
        </h4>
      </div>
      <div className="mb-6 mt-0">
        <p className="text-sm mb-6">
          Nếu bạn chưa có tài khoản,
          <Link href="/" className="text-[#ffd875]">
            {" "}
            đăng ký ngay
          </Link>
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="border-[#ffffff10] h-[42px] bg-transparent text-white placeholder:text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Mật khẩu"
                        {...field}
                        className="border-[#ffffff10] h-[42px] bg-transparent text-white placeholder:text-white/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="my-6">
              <Button
                type="submit"
                className="w-full py-2 px-4 min-h-[40px] text-white font-medium text-sm cursor-pointer"
              >
                Đăng nhập
              </Button>
            </div>

            <div className="text-center">
              <Link
                href="/"
                className="text-[0.875em] text-white hover:text-red-500"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="my-4">
              <Button
                type="button"
                className="w-full cursor-pointer bg-white hover:bg-gray-100 text-gray-900 border-0 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Đăng nhập với Google
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
