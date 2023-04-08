import { useState, useEffect } from "react";

const ChatHistoryHeader = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <div className="text-black font-bold py-5">
                <span className="text-blue-500 pr-3">
                    <i className="fa-regular fa-clock-rotate-left"></i>
                </span>
                Chat History
            </div>
            <div className="flex gap-5 text-blue-500">
                <button
                    type="button"
                >
                    <i className="fa-regular fa-folder-plus"></i>
                </button>
                <button
                    type="button"
                >
                    <i className="fa-regular fa-comment"></i>
                </button>
            </div>
        </div>
    );
};

const ChatFolder = ({ folder }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedChat, setSelectedChat] = useState(null);
    return (
        <div className="items-center my-3">
            <div className="flex justify-between text-black text-100 pl-5 border-l-2 border-gray-300">
                <span>
                    <span className="pr-3">
                        <i className="fa-regular fa-folder"></i>
                    </span>
                    {folder.title}
                </span>

                <div>
                    <button
                        type="button"
                        className="focus:outline-none w-5"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={"text-blue-500 block " + (isOpen ? "" : "rotate-90")}>
                            <i className="fa-regular fa-chevron-down"></i>
                        </span>
                    </button>

                    <button className="ml-1 w-5" type="button">
                        <span className="text-blue-500">
                            <i className="fa-regular fa-ellipsis-v"></i>
                        </span>
                    </button>
                </div>
            </div>

            {
                isOpen && folder.chats.map((chat) => {
                    return (
                        <Chat key={chat.id} chat={chat} state={[selectedChat, setSelectedChat]} />
                    );
                })
            }

        </div>
    );
}

const Chat = ({ chat, state }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedChat, setSelectedChat] = state;

    useEffect(() => {
        if (selectedChat === chat.id) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedChat]);
    
    return (
        <div className={"w-full flex justify-between gap-3 py-1 pl-7 text-x border-l-2 " + (isSelected ? "border-blue-400" : "border-gray-300")}>
            <button 
                type="button"
                className={"w-full text-left text-100 truncate " + (isSelected ? "text-blue-500 font-normal" : "font-light text-black")}
                onClick={() => setSelectedChat(chat.id)}
            >
                {chat.title}
            </button>
            {
                isSelected && (
                    <div className="flex gap-5 text-blue-500">
                        <button
                            type="button"
                        >
                            <i className="fa-regular fa-trash"></i>
                        </button>
                    </div>
                )
            }
        </div>
    );
};

const ChatHistory = () => {
    const folders = [
        {
            id: 1,
            title: "Academia",
            chats: [
                {
                    id: 1,
                    title: "Historia del arte",
                },
                {
                    id: 2,
                    title: "Filosofía de platon",
                },
                {
                    id: 3,
                    title: "Matemáticas discretas",
                },
                {
                    id: 4,
                    title: "Taller de programación",
                },
                {
                    id: 5,
                    title: "Programación orientada a objetos",
                },
            ]
        },
        {
            id: 2,
            title: "Folder 2",
            chats: [
                {
                    id: 6,
                    title: "Chat 1",
                },
                {
                    id: 7,
                    title: "Chat 2",
                },
                {
                    id: 8,
                    title: "Chat 3",
                },
            ]
        },
        {
            id: 3,
            title: "Folder 3",
            chats: [
                {
                    id: 9,
                    title: "Chat 1",
                },
                {
                    id: 10,
                    title: "Chat 2",
                },
                {
                    id: 11,
                    title: "Chat 3",
                },
            ]
        },
    ];

    return (
        <div className="w-1/4 min-w-5xl">
            <ChatHistoryHeader />
            
            {
                folders.map((folder) => {
                    return (
                        <ChatFolder key={folder.id} folder={folder} />
                    );
                })
            }
        </div>
    );
};

export { ChatHistory };