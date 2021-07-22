package mars.walhamblue.chat;

/**
 * Esta clase se encarga de la administraciüon de los mensajes del chat.
 * @author Miguel Angel Rodriguez Siachoque.
 */
public class Message 
{
    private String content;
    private String sender;
    private MessageType type;
    /**
     * Este metodo establece el tipo de mensaje, ya sea eviado o recibido.
     */
    public enum MessageType 
    {
        CHAT, LEAVE, JOIN
    }
    /**
     * Este metodo obtiene el contenido de los mensajes.
     * @return El contenido de los mensajes.
     */
    public String getContent () 
    {
        return content;
    }
    /**
     * Este metodo asigna el contenido del chat.
     * @param content Contenido de los mensajes del remitente.
     */
    public void setContent (String content)
    {
        this.content = content;
    }
    /**
     * Este metodo obtiene el remitente del chat.
     * @return El remitente del chat.
     */
    public String getSender () 
    {
        return sender;
    }
    /**
     * Este metodo asigna el remitente del chat.
     * @param sender Remitente del chat.
     */
    public void setSender (String sender) 
    {
        this.sender = sender;
    }
    /**
     * Este metodo obtiene el tipo de mensaje en el chat.
     * @return Tipo de mensaje.
     */
    public MessageType getType () 
    {
        return type;
    }
    /**
     * Este metodo asigana el tipo del mensaje en el chat.
     * @param type Tipo de mensaje.
     */
    public void setType (MessageType type) 
    {
    	this.type = type;
    }
}