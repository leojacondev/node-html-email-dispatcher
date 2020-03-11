# Node HTML Email Dispacther

This is a simple system for sending mass emails made in node.js, its goal is to allow an email to be sent to countless recipients with just a few configurations.


# Instalation

To install this script, just make a clone of this git repo:
> $ git clone https://github.com/leojacondev/node-html-email-dispatcher.git

## How to configurate

This script has a `config.js` file that allows you to configurate your e-mail, server settings and your **Recipients e-mail list**.

## Sending my own HTML E-mail

To send your own HTML e-mail, copy your `.html` file inside `/html/` and put your file name in `html_file_name` property, inside `config.js`.
## Press Start

After done your configuration, just run:
> node app.js

And your e-mails will be sent. :)

## License
* MIT License
