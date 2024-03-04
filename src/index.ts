import { config } from "dotenv";
config()
import TelegramBot from "node-telegram-bot-api";
import  express  from "express";
const token = process.env.BOT_TOKEN ?? ''
const bot =new TelegramBot(token, { polling: true })
bot.setMyCommands([
    {
        command:"/start",
        description:'Launching bot'
    }
])
bot.onText(/\/start/,(msg)=>{
    bot.setChatMenuButton({
        chat_id:msg.chat.id,
        menu_button:{
            text:'Open web button',
            type:"web_app",
            web_app:{
                url:'https://www.google.com/search?q=translate+uzb+fransuz+&sca_esv=123152d4660d04db&sxsrf=ACQVn08-f8yaYrVXRe8b2BeV9evD2OI5yg%3A1709550214488&ei=hqrlZdG6He2vwPAP8uiJuAQ&udm=&ved=0ahUKEwjRlYrqutqEAxXtFxAIHXJ0AkcQ4dUDCBA&uact=5&oq=translate+uzb+fransuz+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnRyYW5zbGF0ZSB1emIgZnJhbnN1eiAyBhAAGAcYHkjxNlCGDFjDL3ABeAGQAQCYAbcBoAHhCKoBAzAuN7gBA8gBAPgBAZgCBqACngbCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICChAjGIAEGIoFGCfCAgUQABiABMICBBAAGB6YAwCIBgGQBgqSBwMxLjU&sclient=gws-wiz-serp'
            },
        },
    })
    
    bot.sendMessage(msg.chat.id,'hello world',{
        reply_markup:{
            inline_keyboard:[
                [
                    {
                        text:"Web app",
                        web_app:{
                            url:'https://www.google.com/search?q=translate+uzb+fransuz+&sca_esv=123152d4660d04db&sxsrf=ACQVn08-f8yaYrVXRe8b2BeV9evD2OI5yg%3A1709550214488&ei=hqrlZdG6He2vwPAP8uiJuAQ&udm=&ved=0ahUKEwjRlYrqutqEAxXtFxAIHXJ0AkcQ4dUDCBA&uact=5&oq=translate+uzb+fransuz+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnRyYW5zbGF0ZSB1emIgZnJhbnN1eiAyBhAAGAcYHkjxNlCGDFjDL3ABeAGQAQCYAbcBoAHhCKoBAzAuN7gBA8gBAPgBAZgCBqACngbCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICChAjGIAEGIoFGCfCAgUQABiABMICBBAAGB6YAwCIBgGQBgqSBwMxLjU&sclient=gws-wiz-serp',
                        }
                    }
                ]
            ]
        }
    })
})
const app=express()
 app.get('/',(req,res)=>{
     res.send()
     console.log("Server is running")
 })