import { useState, useEffect } from "react";

const ChatHistoryHeader = ({ setIsVisible }) => {
    const closeHistory = () => {
        setIsVisible(false);
    };

    return (
        <div className="flex justify-between items-center py-3">
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
                    <i className="fa-regular fa-comment-plus"></i>
                </button>
                <button
                    className="md:hidden text-xl"
                    onClick={closeHistory}
                    type="button"
                >
                    <i className="fa-regular fa-xmark"></i>
                </button>
            </div>
        </div>
    );
};

const Folder = ({ folder, state, onDropChat }) => {
    const [isOpen, setIsOpen] = useState(true);
    const dragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className="items-center my-3"
            onDragOver={dragOver}
            onDrop={(e) => {
                onDropChat(e, folder.id);
            }}
        >
            <div className="flex justify-between text-black text-100 pl-5 border-l-2 border-gray-300">
                <button
                    type="button"
                    className="focus:outline-none w-full flex justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="mr-3">
                        <i className="fa-regular fa-folder"></i>
                    </span>
                    <span className="truncate gap-3">
                        {folder.title}
                    </span>
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

            {
                isOpen && folder.chats.map((chat) => {
                    return (
                        <ChatItem key={chat.id} chat={chat} state={state} />
                    );
                })
            }

        </div>
    );
}

const ChatItem = ({ chat, state }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [selectedChat, setSelectedChat] = state;

    useEffect(() => {
        if (selectedChat === chat.id) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedChat]);
    
    return (
        <div 
            className={"w-full flex justify-between gap-3 py-1 pl-7 border-l-2 " + (isSelected ? "border-blue-400" : "border-gray-300")}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData("id", chat.id);
            }}
        >
            <button 
                type="button"
                className={"w-full text-left text-100 truncate " + (isSelected ? "text-blue-500 font-normal" : "font-light text-black")}
                onClick={() => setSelectedChat(chat.id)}
            >
                {chat.title}
            </button>
            {
                isHover && (
                    <button
                        className="flex gap-5 text-blue-500"
                        type="button"
                    >
                        <i className="fa-regular fa-trash"></i>
                    </button>
                )
            }
        </div>
    );
};

const ChatHistory = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [folders, setFolders] = useState([
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
    ]);

    const onDropChat = (e, targetFolder) => {
        e.preventDefault();
        const id = parseInt(e.dataTransfer.getData("id")); // TODO: remove parseInt

        let chatToMove;
        const currentFolder = folders.find((folder) => {
            return folder.chats.find((chat) => {
                if (chat.id === id) {
                    chatToMove = {...chat};
                }
                return chat.id === id;
            });
        });

        if (currentFolder === -1 || currentFolder.id === targetFolder ) {
            return;
        }
        console.log("currentFolder", currentFolder.id);
        console.log("targetFolder", targetFolder);

        const newFolders = folders.map((folder) => {
            if (folder.id === currentFolder.id) {
                folder.chats = folder.chats.filter((chat) => {
                    return chat.id !== id;
                });
            }

            if (folder.id === targetFolder) {
                folder.chats.push(chatToMove);
            }

            return folder;
        });

        setFolders(newFolders);
    };

    return (
        <>
            <div className="fixed md:hidden top-0 left-0 z-30 py-2 mt-6 ml-1 text-blue-500 bg-slate-300 rounded-md">
                <button
                    className="focus:outline-none w-10"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    <i className="fa-regular fa-clock-rotate-left"></i>
                </button>
            </div>
            <div
                className={`${isVisible ? "" : "hidden"} md:block w-full mx-auto z-30 h-full px-3 bg-gradient-to-tr from-chat_bg_primary to-chat_bg_secondary md:bg-none md:w-1/4 min-w-5xl max-h-screen overflow-auto pr-5 fixed top-0 left-0 md:static`}
            >
                <ChatHistoryHeader setIsVisible={setIsVisible} />

                
                {
                    folders.map((folder) => {
                        return (
                            <Folder key={folder.id} onDropChat={onDropChat} folder={folder} state={[selectedChat, setSelectedChat]}/>
                        );
                    })
                }
            </div>
        </>
    );
};

export { ChatHistory };