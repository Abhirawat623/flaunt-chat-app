import { useEffect } from "react";
import useUser from "../zustand/useUser"

import notificationSound from "../assets/sound/notification.mp3";
import {useSocketContext} from "../context/SocketContext";
const useListenMessage = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useUser();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldVibrate =true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessage;