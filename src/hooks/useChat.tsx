import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/appContext";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';
import { EMessageSender } from "../types/chatbot";

const socket = io('ws://localhost:3000');

export const useChat = () => {
  const { customers } = useContext(AppContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (message: string) => {
    const customer = customers[0];

    socket.emit('chatbot', {
      customerId: customer.referenceId,
      message,
    });

    const messageItem = {
      customerId: customer.referenceId,
      messageId: uuidv4(),
      message,
      createdAt: new Date().toISOString(),
      sender: EMessageSender.USER,
    };

    setMessages([...messages, messageItem]);
  };

  const handleReceiveMessage = (message: any) => {
    setMessages([...messages, {
      ...message,
      createdAt: new Date().toISOString(),
      sender: EMessageSender.CHATBOT,
    }]);
  };

  const handleLoading = ({ loading }: { loading: boolean }) => {
    setIsLoading(loading);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to socket');
    });

    socket.on('chatbot', handleReceiveMessage);
    socket.on('loading', handleLoading);

    scrollToBottom();

    return () => {
      socket.off('chatbot', handleReceiveMessage);
      socket.off('connect');
    };
  }, [messages]);

  return { messages, handleSendMessage, scrollRef };
};