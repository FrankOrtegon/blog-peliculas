package co.com.sofka.usecase.count;
import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.count.values.Name;
import co.com.sofka.model.count.values.Phone;
import co.com.sofka.model.count.values.Plan;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest(classes = AddCountUseCase.class)
class AddCountUseCaseTest {
    @MockBean
    CountRepository countRepository;
    @Autowired
    AddCountUseCase addCountUseCase;

    @Test
    @DisplayName("Add Count test")
    void test(){
        Count count = new Count("1", Name.of("Sebastian"), Phone.of("3006548"), Plan.of(true));

        Mockito.when(countRepository.addCount(any())).thenReturn(count);

        Count result = addCountUseCase.addCount(count);

        Assertions.assertEquals(count.getIdCount(), result.getIdCount());
        Assertions.assertEquals(count.getName(), result.getName());
        Assertions.assertEquals(count.getPhone(), result.getPhone());
        Assertions.assertEquals(count.getPlan(), result.getPlan());
    }

}