create table userInfo(userid number primary key,
                      username VARCHAR2(50),
                      passwrd VARCHAR2(20),
                      email VARCHAR(30),
                      city VARCHAR2(30),
                      mobile VARCHAR2(10));
                      
                      
desc userInfo;

create SEQUENCE seqUser INCREMENT BY 1 START WITH 1;

 insert into userInfo values(seqUser.nextval,'asdfgh','sdfgA@1234','sdfrde@gmail.com','werty','1234567890');
 
 select userid from userInfo where email = 'abhisethi.53@gmail.com';
 
 delete from userInfo;
 
 select * from userInfo order by userid;
 
 