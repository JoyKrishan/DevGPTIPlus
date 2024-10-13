import java.io.*;

  private String path;

  public Servidor(String path) {
    this.path = path;
  }

  public void leerArchivo() {
    File archivo = null;
    FileReader fr = null;
    BufferedReader br = null;

    try {
      // Apertura del fichero y creacion de BufferedReader para poder
      // hacer una lectura comoda (disponer del metodo readLine()).
      archivo = new File(path);
      fr = new FileReader(archivo);
      br = new BufferedReader(fr);
      // Lectura del fichero
      String linea = br.readLine();
      while (linea != null) {
        System.out.println(linea);
        linea = br.readLine();
      }
    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      // En el finally cerramos el fichero, para asegurarnos
      // que se cierra tanto si todo va bien como si salta
      // una excepcion.
      try {
        if (br != null) {
          br.close();
        }
        if (fr != null) {
          fr.close();
        }
      } catch (Exception e2) {
        e2.printStackTrace();
      }
    }
  }