import { useEffect, useState } from "react";
import useUser from "../zustand/useUser";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedUser } = useUser();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedUser._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedUser?._id) getMessages();
	}, [selectedUser?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;