import { Button } from "@/components/ui/button"

export default function SettingsPage() {
    return (
      <div className="p-8 space-y-8">
        <h2 className="text-2xl font-bold">Settings</h2>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Account</h3>
          <div  className="flex flex-col space-y-2 w-40">
            <Button variant="outline" size="sm" className="cursor-pointer">
              Change Email
            </Button>
            <Button variant="outline" size="sm" className="cursor-pointer">
              Change Password
            </Button>
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Preferences</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Enable Dark Mode</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Receive Email Notifications</span>
            </label>
          </div>
        </div>
  
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-red-600">Danger Zone</h3>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer" >
            Delete Account
          </button>
        </div>
      </div>
    );
  }
  