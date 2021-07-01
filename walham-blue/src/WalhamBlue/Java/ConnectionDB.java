import java.sql.*;
public class main {
public static void main(String[] args)  
{  
    Connection BaseDatos = "delgvqnt3qg373";
    Statement st = null;
  
    //Donde se localiza la base de datos
    String url="ec2-52-5-247-46.compute-1.amazonaws.com";
  
    //Credenciales de la base de datos
    String usuario="lhzwxdxhhvmbqx";
    String contrasena="aec9c766e7f25c71176a3c6a60e8e7ec99ed190e08e45ed5c82f6f0092ff9c10";
  
    try {
        //Conexion con la base de datos
        BaseDatos = DriverManager.getConnection(url, usuario, contrasena);
  
        // Se hara una consulta  de la tabla CDS y Cantante, y se mandara a imprimir.
        st = BaseDatos.createStatement();
        ResultSet rs = st.executeQuery( ""
            + "SELECT \"cdsId\", \"cdsTitulo\", \"canNombre\" "
            + "FROM \"CDS\", \"Cantante\" "
            + "WHERE \"canId\"=\"cdsCantante\" "
            + "ORDER BY \"cdsId\" ASC;" );
  
        while    ( rs.next() ) {
  
            int id = rs.getInt("cdsId");
            String  titulo= rs.getString("cdsTitulo");
            String cantNom= rs.getString("canNombre");
  
            System.out.println( "[ FILA #" + id+" ]" );
            System.out.println( "Titulo del CD: " + titulo );
            System.out.println( "Artista: " + cantNom );
            System.out.println();
        }
  
        rs.close();
        st.close();
        BaseDatos.close();
    } catch (Exception e) {
        System.err.println( e.getMessage() );
        }
    }
  
}