CREATE TABLE "user" (
    "id" int(11) NOT NULL PRIMARY KEY IDENTITY(1,1),
    "username" varchar (100)  NOT NULL,
    "name" varchar (100) NOT NULL,
    "email" varchar (100) NOT NULL
);

INSERT INTO "user"
VALUES ('akash', 'Akash', 'akash@longbottom.com');

INSERT INTO "user"
VALUES ('ayush', 'Ayush', 'ayush@longbottom.com');

INSERT INTO "user"
VALUES ('arnav', 'Arnav', 'arnav@longbottom.com');

INSERT INTO "user"
VALUES ('aryan', 'Aryan', 'aryan@longbottom.com');

INSERT INTO "user"
VALUES ('aditya', 'Aditya', 'aditya@longbottom.com');