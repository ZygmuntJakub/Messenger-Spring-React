package com.as3j.messenger.authentication;

import java.io.Serializable;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046845L;

    private final String jwttoken;

    public JwtResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }

    public String getToken() {
        return URLEncoder.encode(this.jwttoken, StandardCharsets.UTF_8);
    }

}