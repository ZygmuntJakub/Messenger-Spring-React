package com.as3j.messenger.services;

import com.as3j.messenger.dto.ChangePasswordDto;
import com.as3j.messenger.exceptions.NoSuchUserException;
import com.as3j.messenger.exceptions.UserWithSuchEmailExistException;
import com.as3j.messenger.exceptions.WrongCurrentPasswordException;
import com.as3j.messenger.model.entities.User;

import java.util.UUID;

public interface UserService {
    User getById(UUID id) throws NoSuchUserException;

    User getByEmail(String email) throws NoSuchUserException;

    void update(User user);

    void create(User user) throws UserWithSuchEmailExistException;

    void changePassword(User user, ChangePasswordDto changePasswordDto) throws WrongCurrentPasswordException;
}
