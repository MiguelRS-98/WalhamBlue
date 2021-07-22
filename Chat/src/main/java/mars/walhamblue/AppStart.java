package mars.walhamblue;

import java.util.Collections;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal de ejecución de la applicación.
 * @author Miguel Angel Rodriguez Siachoque.
 */
@SpringBootApplication
public class AppStart 
{
    /**
     * Ejecutador de Spring Boot.
     * @param args 
     */
    public static void main (String[] args)
    {
        SpringApplication app = new SpringApplication(AppStart.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", getPort()));
        app.run(args);
    }
    /**
     * Genera el puerto con el cual se ejecuta la app.
     * @return numero de puerto.
     */
    public static int getPort () 
    {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 8080;
    }
}