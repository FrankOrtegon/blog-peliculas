package co.com.sofka.usecase.count;

import co.com.sofka.model.count.User;
import co.com.sofka.model.count.gateways.UserRepository;
import co.com.sofka.model.count.values.Email;
import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.count.values.UrlPhoto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest(classes = AddUserUseCase.class)
class AddUserUseCaseTest {
    @MockBean
    UserRepository userRepository;
    @Autowired
    AddUserUseCase addUserUseCase;

    @Test
    @DisplayName("Add User test")
     void test(){
        User user = new User(IdUser.of("1"), Email.of("sebas@gmail.com"), UrlPhoto.of("photoUrl"));

        Mockito.when(userRepository.addUser(any())).thenReturn(user);

        User result = addUserUseCase.addUser(user);

        Assertions.assertEquals(user.getIdUser(),result.getIdUser());
        Assertions.assertEquals(user.getEmail(),result.getEmail());
        Assertions.assertEquals(user.getUrlPhoto(),result.getUrlPhoto());

    }

}