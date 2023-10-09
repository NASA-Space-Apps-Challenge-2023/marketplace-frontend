import {
    updateCategoryFilter,
  } from "@/store/api/shop/action";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { Widget, addResponseMessage } from "react-chat-widget";
import 'react-chat-widget/lib/styles.css';

const ChatBot = () =>{
    const dispatch = useDispatch();

    const handleNewUserMessage = newMessage => {
        console.log(`New message incoming! ${newMessage}`);
        // Change updateCategoryFilter to bots response
        dispatch(updateCategoryFilter(newMessage.toLowerCase()));

        // Message from bot
        let response = "received"
        addResponseMessage(response);
    };

    const getCustomLauncher = (handleToggle) =>
        <button className="bg-[#0060df] text-white p-3 rounded-full text-3xl w-15 h-15 max-w-[55px] self-end mt-3 shadow-md shadow-black" onClick={handleToggle}><Icon icon="material-symbols:robot-2-outline-rounded"/></button>
    
    return (
        <div className="[&_.rcw-conversation-container]:w-[350px] [&_.rcw-header]:bg-[#0060df] [&_.rcw-sender]:gap-5 [&_.rcw-new-message]:w-[85%] [&_.rcw-sender]:items-center [&_.rcw-picker-btn]:hidden [&_.rcw-client>.rcw-message-text]:bg-slate-300 [&_.rcw-client>.rcw-message-text]:text-slate-800 [&_.rcw-response>.rcw-message-text]:bg-slate-100 [&_.rcw-response>.rcw-message-text]:text-slate-600">
            <Widget handleNewUserMessage={handleNewUserMessage} launcher={handleToggle => getCustomLauncher(handleToggle)} title="Hi! I'm Boty" subtitle="Let's find your perfect projects!"/>
        </div>
    )
}

export default ChatBot;