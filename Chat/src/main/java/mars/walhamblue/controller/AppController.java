package mars.walhamblue.controller;

import mars.walhamblue.chat.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

/**
 * Esta clase se encarga de controlar las configuraciones del chat de la aplicacion.
 * @author Miguel Angel Rodriguez Siachoque.
 */
@Controller
public class AppController 
{
    /**
     * Este metodo se encarga del control en el registro del chat.
     * @param chatMessage Chat de la aplicacion.
     * @param headerAccessor Cabecera del chat de la aplicacion.
     * @return Chat de la aplicacion.
     */
    @MessageMapping("/chat.register")
    @SendTo("/topic/public")
    public Message register(@Payload Message chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }
    /**
     * Este metodo se encarga del envio de mensajes en el chat.
     * @param chatMessage Chat de la aplicacion.
     * @return Chat de la aplicacion.
     */
    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public Message sendMessage(@Payload Message chatMessage) {
        return chatMessage;
    }
}
