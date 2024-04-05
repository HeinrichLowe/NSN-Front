import { LoginForm } from "@/components/LoginForm/LoginForm";

export default function Page() {
  return (
    <div className="container h-screen mx-auto p-2 flex flex-col gap-4 lg:flex-row">
      <header className="flex flex-col justify-center items-center lg:flex-1">
        <h1 className="py-2 text-4xl text-center font-bold">Great Things are Coming</h1>
        <img src="/images/logo.png" alt="logo" />
      </header>
      
      <main className="flex-1 flex justify-center items-center lg:justify-end">
        <LoginForm />
      </main>
    </div>
  );
}