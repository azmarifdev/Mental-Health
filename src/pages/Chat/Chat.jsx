import {useEffect, useMemo, useState} from "react";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

const Chat = () => {
    const {user, token} = useUserContext();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);

    const canSend = useMemo(() => text.trim().length > 0 && !sending, [text, sending]);

    const loadMessages = () => {
        if (!user?._id) return;
        setLoading(true);
        fetch(`${config.base_url}/user/${user._id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token || localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((resData) => {
                setMessages(resData?.data?.chat || []);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        loadMessages();
    }, [user?._id]);

    const sendToBot = async (msg) => {
        const res = await fetch(`${config.base_url}/user/chat-with-ai/${user?._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token || localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({data: msg}),
        });
        return res.json();
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!canSend || !user?._id) return;

        const userMsg = {role: "user", content: text.trim()};

        setSending(true);
        try {
            const resData = await sendToBot(userMsg);
            if (!resData?.success) {
                throw new Error("Chat API failed");
            }
            setMessages(resData?.data?.chat || []);
            setText("");
        } catch (err) {
            toast.error("Message send failed. Please try again.");
        } finally {
            setSending(false);
        }
    };

    const handleClear = async () => {
        if (!user?._id) return;
        try {
            await fetch(`${config.base_url}/user/chat-with-ai/${user._id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${token || localStorage.getItem("accessToken")}`,
                },
            });
            setMessages([]);
            toast.success("Chat cleared.");
        } catch (err) {
            toast.error("Could not clear chat.");
        }
    };

    return (
        <section className="container py-10 md:py-14">
            <div className="mb-6 flex items-end justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Support Companion
                    </p>
                    <h1 className="mt-2 text-2xl font-bold text-white md:text-4xl">
                        Chat With Bot
                    </h1>
                </div>
                <button
                    type="button"
                    onClick={handleClear}
                    className="rounded-xl bg-rose-400/20 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-400/30">
                    Clear Chat
                </button>
            </div>

            <div className="glass-card overflow-hidden">
                <div className="h-[56vh] space-y-3 overflow-y-auto p-4 md:p-5">
                    {loading ? (
                        <p className="text-sm text-slate-300">Loading chat...</p>
                    ) : messages?.length ? (
                        messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed md:max-w-[75%] ${
                                    msg.role === "user"
                                        ? "ml-auto bg-sky-500/20 text-slate-100"
                                        : "bg-white/10 text-slate-200"
                                }`}>
                                {msg.content}
                            </div>
                        ))
                    ) : (
                        <div className="rounded-xl bg-white/5 p-4 text-sm text-slate-300">
                            Start chatting. Messages will be saved in your account.
                        </div>
                    )}
                </div>

                <form onSubmit={handleSend} className="border-t border-white/10 p-3 md:p-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Write your message..."
                            className="w-full rounded-xl px-4 py-2.5"
                        />
                        <button type="submit" disabled={!canSend} className="btn-primary px-5">
                            {sending ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Chat;
