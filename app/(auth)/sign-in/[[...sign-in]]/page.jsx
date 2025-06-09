import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Image */}
      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
          alt="Welcome Image"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to ExpenseEase</h1>
          <p className="text-lg text-center max-w-md">
            Master your money with ease!.
          </p>
        </div>
      </div>

      {/* Right SignIn Form */}
      <main className="flex items-center justify-center px-8 py-12 sm:px-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <SignIn  afterSiginInUrl="/dashboard" afterSignOutUrl='/' />
        </div>
      </main>
    </section>
  );
}
