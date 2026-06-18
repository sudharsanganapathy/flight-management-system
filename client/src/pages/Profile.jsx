import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(
      localStorage.getItem("user")
    );

    setUser(userInfo);
  }, []);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

      {/* Background Glow */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Profile Card */}

      <div className="relative z-10 w-full max-w-4xl rounded-[40px] border border-slate-800 bg-slate-900/70 p-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

        {/* Avatar Section */}

        <div className="flex flex-col items-center">

          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-5xl font-bold text-white shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <h1 className="mt-6 text-5xl font-black">
            {user.name}
          </h1>

          <p className="mt-3 text-slate-400">
            AeroVista Passenger
          </p>

          <span
            className={`mt-5 rounded-full px-6 py-2 text-sm font-semibold ${
              user.role === "admin"
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {user.role.toUpperCase()}
          </span>

        </div>

        {/* Info Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

            <p className="text-slate-400">
              Full Name
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              {user.name}
            </h2>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">

            <p className="text-slate-400">
              Email Address
            </p>

            <h2 className="mt-3 break-all text-xl font-bold">
              {user.email}
            </h2>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-12 border-t border-slate-800 pt-6 text-center">

          <p className="text-slate-500">
            Welcome aboard AeroVista ✈️
          </p>

        </div>

      </div>

    </div>
  );
};

export default Profile;