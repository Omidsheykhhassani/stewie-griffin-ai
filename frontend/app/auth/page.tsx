import AuthContent from "@/components/AuthContent/AuthContent";

export default function AuthPage() {
  // This is here to show something when we refresh the page in /auth route
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-bgcolor p-6 rounded-xl w-full max-w-lg mx-2">
        <AuthContent />
      </div>
    </main>
  );
}
