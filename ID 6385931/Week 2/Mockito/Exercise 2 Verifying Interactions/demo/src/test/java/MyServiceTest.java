import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create a mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Use the mock in your service
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 3: Verify the interaction
        verify(mockApi).getData();
    }
}
