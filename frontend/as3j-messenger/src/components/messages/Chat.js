import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Grid, Text, TextArea} from "grommet";
import axios from "axios";
import {backendUrl} from "../../utils/constants";
import authHeader from "../../utils/authHeader";
import {useAuth} from "../../context/context";
import userInfo from "../../utils/userInfo";
import {Send} from "grommet-icons";
import SockJS from "sockjs-client";
import Stomp from "stompjs";


export const Chat = ({chat}) => {
    const [data, setData] = useState([]);
    const [message, setMessage] = React.useState("");
    const {setAuthToken} = useAuth();
    const messagesEndRef = useRef(null);
    const socket = new SockJS(`${backendUrl}/ws`);
    const stompClient = Stomp.over(socket);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    };

    const stompClientConnect = (messages) => {
        stompClient.connect({}, frame => {
            stompClient.subscribe(`/messages/add/${chat}`, message => {
                messages.push(JSON.parse(message.body))
                setData(() => [
                    ...messages,
                ])
            });
        });
    }

    useEffect(() => {
        axios.get(`${backendUrl}/chats/${chat}`, {headers: {Authorization: authHeader()}}).then(result => {
            setAuthToken(result.headers.authorization);
            setData(result.data);
            stompClientConnect(result.data);
        }).catch(e => {
            alert(e);
        });
        scrollToBottom();

    }, [chat, setAuthToken]);

    useEffect(scrollToBottom, [data]);

    const handleSubmit = () => {
        axios.post(`${backendUrl}/chats/${chat}/messages`,
            {
                value: message
            },
            {headers: {Authorization: authHeader()}})
            .catch(e => {
                alert(e);
            });
        setMessage("");
    }


    return (
        <Box pad={"medium"}>
            <Grid
                pad={'20px'}
                rows={['80vh', '20%']}
                columns={['100%']}
                gap="small"
                areas={[
                    {name: 'messages', start: [0, 0], end: [0, 0]},
                    {name: 'send', start: [0, 1], end: [0, 1]},
                ]}
            >
                {data && (
                    <Box
                        margin={{top: "large"}}
                        round
                        overflow={"auto"}
                        gridArea="messages"
                        background="light-1">
                        {data.map((c) => (
                            <>
                                {c.author !== userInfo().username ? (
                                    <Box flex={false} basis={"80px"} animation={"fadeIn"} margin={"xsmall"} round
                                         pad={"small"} background="light-3">
                                        <Text>{c.content}</Text>
                                        <Text size={"xsmall"}>{c.author}</Text>
                                        <Text size={"xsmall"}>
                                            {!c.timestamp.nano ?
                                                new Date(c.timestamp).toDateString() :
                                                c.timestamp.hour + ":" + c.timestamp.minute + ":" + c.timestamp.second
                                            }
                                        </Text>
                                    </Box>
                                ) : (
                                    <Box flex={false} basis={"80px"} animation={"fadeIn"} margin={"xsmall"} round
                                         pad={"small"} background="brand"
                                         align={"end"}>
                                        <Text>{c.content}</Text>
                                        <Text size={"xsmall"}>You</Text>
                                        <Text size={"xsmall"}>
                                            {!c.timestamp.nano ?
                                                new Date(c.timestamp).toLocaleTimeString() :
                                                c.timestamp.hour + ":" + c.timestamp.minute + ":" + c.timestamp.second
                                            }
                                        </Text>
                                    </Box>
                                )}
                            </>
                        ))}
                        <div ref={messagesEndRef}/>
                    </Box>
                )}
                <Box round pad={"small"} animation={"fadeIn"} margin={"xxsmall"} gridArea="send" background="light-1">
                    <TextArea
                        resize={false}
                        fill
                        placeholder="type here"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />
                    <Button
                        type={"submit"}
                        gap={"small"}
                        margin={"small"}
                        size={"medium"}
                        onClick={handleSubmit}
                    >
                        <Send/><Text margin={"small"}>Send</Text>
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Chat;