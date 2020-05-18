package com.as3j.messenger.services;

import com.as3j.messenger.dto.AddChatDto;
import com.as3j.messenger.dto.ChatDto;
import com.as3j.messenger.dto.MessageDto;
import com.as3j.messenger.exceptions.MessageAuthorIsNotMemberOfChatException;
import com.as3j.messenger.exceptions.NoSuchChatException;
import com.as3j.messenger.exceptions.NoSuchUserException;
import com.as3j.messenger.model.entities.User;

import java.util.List;
import java.util.UUID;

public interface ChatService {

    void add(AddChatDto chat) throws NoSuchUserException;

    List<ChatDto> getAll(User user);

    List<MessageDto> get(User user, UUID id) throws NoSuchChatException, MessageAuthorIsNotMemberOfChatException;
}
