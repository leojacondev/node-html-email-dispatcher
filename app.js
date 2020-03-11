var mailer = require('nodemailer')
var path = require('path')
var hbs = require('nodemailer-express-handlebars')
var config = require('./config')

var server = mailer.createTransport({
    host: config.server.host,
    port: config.server.port,
    ssl: config.server.useSSL,
    auth: {
        user: config.authentication.user,
        pass: config.authentication.password
    }
})

const handlebarOptions = {
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./html/'),
        layoutsDir: path.resolve('./html/'),
        defaultLayout: '',
    },
    viewPath: path.resolve('./html/'),
    extName: '.html'
};

server.use('compile', hbs(handlebarOptions))

for (let i = 0; i < config.email.to.length; i++) {
    var mailInfo = {
        from: `"${config.email.identity}" ${config.email.from}`,
        to: config.email.to[i],
        subject: config.email.subject,
        template: config.email.html_file_name
    }

    server.sendMail(mailInfo, (err, info) => {
        if (err) return console.error(err);

        console.log(`Successfully sent to: ${config.email.to[i]}`)
    })
}