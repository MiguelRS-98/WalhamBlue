package mars.walhamblue.configurator;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

/**
 * Clase de configuracion del servidor de la app.
 * @author Miguel Angel Rodriguez Siachoque.
 */
@Configuration
@EnableWebSocketMessageBroker
public class AppConfigurator implements WebSocketMessageBrokerConfigurer
{
    /**
     * Este metodo se encarga de la conexión cliente y servidor.
     * @param registry Registro cliente servidor y servidor cliente.
     */
    @Override
    public void registerStompEndpoints (StompEndpointRegistry registry) 
    {
        registry.addEndpoint("/javatechie").withSockJS();
    }
    /**
     * Este metodo se encarga del protocolo de comunicación bidireccional.
     * @param registry Registro cliente servidor y servidor cliente.
     */
    @Override
    public void configureMessageBroker (MessageBrokerRegistry registry) 
    {
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }
}