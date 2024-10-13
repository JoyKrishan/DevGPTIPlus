import java.io.File;

  public final static String PATH = getPathToFile("listapalabras1.txt");

  private static String getPathToFile(String fileName) {
    String rootDir = System.getProperty("user.dir");
    String filePath = rootDir + File.separator + "servidor_tareas" + File.separator + "src" + File.separator + "main"
        + File.separator + "java" + File.separator + "com" + File.separator + "servidortareas" + File.separator
        + fileName;
    return filePath;
  }