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

@SpringBootTest(classes = GetCountUseCase.class)
class GetCountUseCaseTest {

    @MockBean
    CountRepository countRepository;

    @Autowired
    GetCountUseCase getCountUseCase;

    @Test
    @DisplayName("Get Count test")
     void test(){
        Count count = new Count("1", Name.of("Sebastian"), Phone.of("3006548"), Plan.of(true));

        Mockito.when(countRepository.getCount(any())).thenReturn(count);

        Count result = getCountUseCase.getCount("1");

        Assertions.assertEquals(count.getIdCount(), result.getIdCount());
        Assertions.assertEquals(count.getName(), result.getName());
        Assertions.assertEquals(count.getPhone(), result.getPhone());
        Assertions.assertEquals(count.getPlan(), result.getPlan());
    }
  
}