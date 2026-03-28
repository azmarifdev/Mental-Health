const Loading = () => {
    return (
        <div className="grid min-h-[40vh] place-content-center">
            <div className="glass-card flex items-center gap-3 px-5 py-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-sky-400" />
                <p className="text-sm font-semibold text-slate-200">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
