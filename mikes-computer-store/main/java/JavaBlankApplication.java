package javaspringbootblank.javablank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaBlankApplication {

  public static void main(String[] args) {
    System.setProperty("java.io.tmpdir", "/home/app/tmp");
    SpringApplication.run(JavaBlankApplication.class, args);
  }

}
