// Dash-OS: Desktop UI + dApp Store with Permission System (Polygon DeFi)

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { WalletConnectButton } from "@/components/web3/WalletConnectButton";

const apps = [
  {
    name: "QuickSwap",
    description: "Swap tokens on Polygon instantly",
    permissions: ["Read Wallet Balance", "Send Transactions"],
  },
  {
    name: "Aave",
    description: "Lend & Borrow assets",
    permissions: ["Read Wallet Balance", "Approve Tokens", "Send Transactions"],
  },
];

export default function Desktop() {
  const [openApp, setOpenApp] = useState(null);
  const [permissionsRequested, setPermissionsRequested] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Taskbar */}
      <div className="fixed bottom-0 w-full bg-gray-950/80 backdrop-blur-sm p-2 flex justify-between items-center">
        <span className="text-lg font-bold">Dash-OS</span>
        <div className="flex items-center gap-4">
          {openApp && <span>{openApp}</span>}
          <WalletConnectButton />
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {apps.map((app) => (
          <Dialog key={app.name} onOpenChange={() => setOpenApp(app.name)}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition">
                <CardContent className="p-4">
                  <div className="text-xl font-semibold">{app.name}</div>
                  <p className="text-sm text-gray-400">{app.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h2 className="text-lg font-bold">Permissions Required</h2>
              </DialogHeader>
              <ul className="list-disc pl-5 text-sm">
                {app.permissions.map((perm, idx) => (
                  <li key={idx}>{perm}</li>
                ))}
              </ul>
              <div className="flex justify-end mt-4 gap-2">
                <Button onClick={() => setPermissionsRequested(app.permissions)} variant="secondary">
                  Allow
                </Button>
                <Button variant="destructive">Deny</Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
