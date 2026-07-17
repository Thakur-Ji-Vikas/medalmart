import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <AuthCard
        title="Forgot Password"
        subtitle="We'll help you recover your account"
      >
        <ForgotPasswordForm />
      </AuthCard>
    </main>
  );
}