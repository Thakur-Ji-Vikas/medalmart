import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <AuthCard
        title="Create Account"
        subtitle="Join MedalMart today"
      >
        <RegisterForm />
      </AuthCard>
    </main>
  );
}