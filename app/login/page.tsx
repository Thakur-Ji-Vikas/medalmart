import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <AuthCard
        title="Welcome Back"
        subtitle="Login to your MedalMart account"
      >
        <LoginForm />
      </AuthCard>
    </main>
  );
}