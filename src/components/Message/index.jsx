import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from "react-copy-to-clipboard";

const Message = ({ message }) => {
    const { role, message: msg } = message;

    return (
        <div className={`w-full flex ${role === "user" ? "justify-end" : "justify-end flex-row-reverse"}`}>
            <div className={`w-[calc(100%-20px)] flex gap-7 font-light text-n flex-wrap markdown ${role === "user" ? "bg-cyan-700 text-white font-normal" : "bg-slate-200"} rounded-xl p-5 md:px-10`}>
                <ReactMarkdown
                    children={msg}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <div className="w-full overflow-auto relative">
                                    <CopyToClipboard text={String(children).replace(/\n$/, "")}>
                                        <button className="absolute top-4 right-3 text-white">
                                            <i className="fa-regular fa-copy"></i>
                                        </button>
                                    </CopyToClipboard>
                                    <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    language={match[1]}
                                    style={codeStyle}
                                    {...props}
                                    />
                                </div>
                            ) : (
                                <code className={className} {...props}>
                                {children}
                                </code>
                            );
                        },
                    }}
                    remarkPlugins={[remarkGfm]}
                />
            </div>
        </div>
    );
};

export { Message };