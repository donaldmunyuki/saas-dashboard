import { useState } from "react";
import { Send } from "lucide-react";

const conversations = [
  { name: "Alice Cooper", lastMsg: "Hey, about the order...", time: "2m", unread: 3 },
  { name: "Bob Smith", lastMsg: "Thanks for the update!", time: "15m", unread: 0 },
  { name: "Carol White", lastMsg: "When will it ship?", time: "1h", unread: 1 },
  { name: "Dan Brown", lastMsg: "Got it, thanks!", time: "3h", unread: 0 },
];

const msgs = [
  { from: "them", text: "Hey, I wanted to check on my order status", time: "10:30 AM" },
  { from: "me", text: "Sure! Let me look that up for you. Your order #1234 is being processed.", time: "10:32 AM" },
  { from: "them", text: "Great, when will it ship?", time: "10:33 AM" },
  { from: "me", text: "It should ship within 24 hours. You'll receive a tracking number via email.", time: "10:35 AM" },
];

const Messages = () => {
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Messages</h1>
      <p className="text-sm text-muted-foreground mb-6">Your conversations</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
        {/* List */}
        <div className="rounded-xl border border-border bg-card overflow-y-auto">
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-3 p-4 text-left border-b border-border hover:bg-muted/50 transition-colors ${selected === i ? "bg-muted" : ""}`}
            >
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
                  <span className="text-[10px] text-muted-foreground">{c.time}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{c.lastMsg}</p>
              </div>
              {c.unread > 0 && (
                <span className="h-5 min-w-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Chat */}
        <div className="md:col-span-2 rounded-xl border border-border bg-card flex flex-col">
          <div className="border-b border-border p-4">
            <p className="text-sm font-semibold text-foreground">{conversations[selected].name}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm ${m.from === "me" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  <p>{m.text}</p>
                  <p className={`text-[10px] mt-1 ${m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="rounded-lg bg-primary p-2.5 text-primary-foreground hover:opacity-90">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
