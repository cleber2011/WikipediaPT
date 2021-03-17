package simples;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class Artigo {
    String url;
    WebDriver driver;

    @Before
    public void iniciar(){
        url = "https://pt.wikipedia.org/";
        System.setProperty("webdriver.chrome.driver","drivers/chrome/89/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().window().maximize();
        // define espera implicita de 1 min,
        driver.manage().timeouts().implicitlyWait(60000, TimeUnit.MILLISECONDS);


    }

    @Test
    public void consultarArtigo(){
        // abrir o site
        driver.get(url);

        // pesquisar por "Ovo de Páscoa"
        driver.findElement(By.id("searchInput")).sendKeys("Ovo de Páscoa");
        driver.findElement(By.cssSelector("button.wvui-button")).click(); // Clica na lupa

        // Validar o titula da página de retorno
        //assertEquals("Ovo de Páscoa - Wikipédia, a enciclopédia livre", driver.getTitle());
        assertTrue(driver.getTitle().contains("Ovo de Páscoa"));
        //assertEquals("Ovo de Páscoa", driver.findElement(By.id("firstHeading")).getText());

    }
    @After
    public void finalizar(){
        driver.quit();
    }
}
