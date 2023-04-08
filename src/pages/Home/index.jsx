import { Layout } from "../../components/Layout";
import { ChatHistory } from "../../components/ChatHistory";
import { Chat } from "../../components/Chat";

const Home = () => {
    return (
        <Layout>
            <div className="flex justify-between">
                <ChatHistory />
                <Chat />
            </div>
        </Layout>
    );
;}

export { Home };
