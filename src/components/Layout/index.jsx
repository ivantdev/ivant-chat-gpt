const Layout = ({ children }) => {
    return (
        <div className="h-screen w-full bg-gradient-to-tr from-chat_bg_primary to-chat_bg_secondary">
            <div className="container mx-auto xl">
                { children }
            </div>
        </div>
    );
};

export { Layout };