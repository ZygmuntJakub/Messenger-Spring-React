INSERT INTO USER (UUID, USERNAME, PASSWORD, EMAIL, AVATAR_URL) VALUES ('b5607d38-8fc1-43ef-b44e-34967083c80a', 'user1', '$2y$12$mbgq1js5u63Nmw.sGjbNSeM3rreiCrYiwCIo/.VY1w5TYImbMwbo', 'user1@mail.com', 'https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp');
INSERT INTO USER (UUID, USERNAME, PASSWORD, EMAIL, AVATAR_URL) VALUES ('e13749fe-9810-11ea-bb37-0242ac130002', 'user2', '$2y$12$mbgq1js5u63Nmw.sGjbNSeM3rreiCrYiwCIo/.VY1w5TYImbMwbo', 'user2@mail.com', 'https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp');
INSERT INTO USER (UUID, USERNAME, PASSWORD, EMAIL, AVATAR_URL) VALUES ('e5036964-9810-11ea-bb37-0242ac130002', 'user3', '$2y$12$mbgq1js5u63Nmw.sGjbNSeM3rreiCrYiwCIo/.VY1w5TYImbMwbo', 'user3@mail.com', 'https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp');

INSERT INTO USER_BLACKLIST (USER_ID, BLACKLIST_USER_ID) VALUES ('e13749fe-9810-11ea-bb37-0242ac130002', 'e5036964-9810-11ea-bb37-0242ac130002');

INSERT INTO CHAT (UUID, NAME) VALUES ('86acf316-9811-11ea-bb37-0242ac130002', 'Chat1');

INSERT INTO CHAT_USERS (CHAT_ID, USER_ID) VALUES ('86acf316-9811-11ea-bb37-0242ac130002', 'b5607d38-8fc1-43ef-b44e-34967083c80a');
INSERT INTO CHAT_USERS (CHAT_ID, USER_ID) VALUES ('86acf316-9811-11ea-bb37-0242ac130002', 'e13749fe-9810-11ea-bb37-0242ac130002');

INSERT INTO MESSAGE (CONTENT, TIMESTAMP, CHAT_ID, USER_ID) VALUES ('Hi', NOW(), '86acf316-9811-11ea-bb37-0242ac130002', 'b5607d38-8fc1-43ef-b44e-34967083c80a');
INSERT INTO MESSAGE (CONTENT, TIMESTAMP, CHAT_ID, USER_ID) VALUES ('Hi bro', NOW(), '86acf316-9811-11ea-bb37-0242ac130002', 'e13749fe-9810-11ea-bb37-0242ac130002');