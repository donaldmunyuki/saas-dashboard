import { User, Bell, Shield, Palette } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage your account preferences</p>

      <div className="space-y-6 max-w-2xl">
        {/* Profile */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3 mb-4">
            <User size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-foreground">Profile</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Full Name</label>
              <input defaultValue="S. Datta" className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm outline-none" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input defaultValue="user@email.com" className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm outline-none" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-foreground">Notifications</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "Email Notifications", checked: emailNotif, set: setEmailNotif },
              { label: "Push Notifications", checked: pushNotif, set: setPushNotif },
            ].map((n) => (
              <label key={n.label} className="flex items-center justify-between rounded-lg border border-border p-3 cursor-pointer">
                <span className="text-sm text-foreground">{n.label}</span>
                <div
                  onClick={() => n.set(!n.checked)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${n.checked ? "bg-primary" : "bg-muted"}`}
                >
                  <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-card shadow transition-transform ${n.checked ? "translate-x-5" : "translate-x-0.5"}`} />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-foreground">Security</h3>
          </div>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
