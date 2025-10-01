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
  import { registerSchema, RegisterValues } from "@/lib/validations/auth";
  import { zodResolver } from "@hookform/resolvers/zod";
  
  const RegisterForm = () => {
    const form = useForm<RegisterValues>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const onSubmit = (values: RegisterValues) => {
      console.log(values);
    };
    return (
      <>
        <div className="mb-4">
          <h4 className="text-[1.4em] font-semibold leading-normal text-white">
            Đăng ký
          </h4>
        </div>
        <div className="mb-6 mt-0">
          <p className="text-sm mb-6">
            Nếu bạn đã có tài khoản
            <Link href="/" className="text-[#ffd875]">
              {" "}
              đăng nhập
            </Link>
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <FormField
                    name="name"
                    render={({ field }) => (
                        <FormItem className="mb-2">
                        <FormControl>
                            <Input
                            placeholder="Tên hiển thị"
                            {...field}
                            className="border-[#ffffff10] h-[42px] bg-transparent text-white placeholder:text-white/50"
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

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

                <FormField
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Nhập lại mật khẩu"
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
                  Đăng ký
                </Button>
              </div>
  
            </form>
          </Form>
        </div>
      </>
    );
  };
  
  export default RegisterForm;
  