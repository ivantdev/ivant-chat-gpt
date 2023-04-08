const Chat = () => {
    return (
        <div className="w-full px-10 py-5">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    <div className="ml-3">
                        <h3 className="text-2xl font-bold">John Doe</h3>
                        <p className="text-gray-500">Active 1 hour ago</p>
                    </div>
                </div>
                <div className="flex gap-5 text-blue-500">
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-phone"></i>
                    </button>
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-video"></i>
                    </button>
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-ellipsis-v"></i>
                    </button>
                </div>
            </div>

            <div className="flex flex-col-reverse gap-5 mt-10  overflow-scroll">
                <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-300 rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-300 rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-300 rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-300 rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="max-w-xs bg-blue-500 text-white rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="max-w-xs bg-gray-300 rounded-xl p-5">
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Chat };