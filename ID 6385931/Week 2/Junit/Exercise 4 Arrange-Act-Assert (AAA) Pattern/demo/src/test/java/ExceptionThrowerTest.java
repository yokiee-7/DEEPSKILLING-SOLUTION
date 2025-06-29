import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class ExceptionThrowerTest {

    private ExceptionThrower thrower;

    @Before
    public void setUp() {
        thrower = new ExceptionThrower();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        thrower = null;
        System.out.println("Teardown complete");
    }

    @Test(expected = IllegalArgumentException.class)
    public void testThrowException() {
        // Act
        thrower.throwException();

    }
}
