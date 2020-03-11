var config = module.exports = [];

/*
Server Properties Configuration:

@host: your SMTP server. Example: smtp.gmail.com;
@port: your SMTP server port;
@useSSL: true | false - Use a secure connection to SMTP server;

*/

config.server = {
    host: "smtp.example.com",
    port: "465",
    useSSL: true
}

/*
Email Properties Configuration:

@identity: name of your e-mail will be identified;
@from: your e-mail address;
@to: array of e-mail's address that your e-mail will be sent;
@subject: your e-mail subject;
@html_file_name: name of your html file (located in /html/) that will be the body of your e-mail

*/

config.email = {
    identity: "Mr. Example",
    from: "example.from@example.com",
    to: ["example.to@example.com"],
    subject: "Example",
    html_file_name: "index",
}

/*
Authentication Properties Configuration:

@user: your SMTP server user;
@password: your SMTP server password;

*/

config.authentication = {
    user: "example.from@example.com",
    password: "thispasswordisaexample"
}