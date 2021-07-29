package co.com.sofka.usecase.count;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.count.values.Name;
import co.com.sofka.model.count.values.Phone;
import co.com.sofka.model.count.values.Plan;
import co.com.sofka.usecase.count.UpdateCountUseCase;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest(classes = UpdateCountUseCase.class)
class UpdateCountUseCaseTest {
    @MockBean
    CountRepository countRepository;
    @Autowired
    UpdateCountUseCase updateCountUseCase;

    @Test
    @DisplayName("Update Count test")
    void test(){
        Count count = new Count(IdCount.of("1"), Name.of("Sebastian"), Phone.of("3006548"), Plan.of(true));

        Mockito.when(countRepository.updateCount(any())).thenReturn(count);

        Count result = updateCountUseCase.updateCount(count);

        Assertions.assertEquals(count.getIdCount(), result.getIdCount());
        Assertions.assertEquals(count.getName(), result.getName());
        Assertions.assertEquals(count.getPhone(), result.getPhone());
        Assertions.assertEquals(count.getPlan(), result.getPlan());
    }
}