package co.com.sofka.usecase.count;

import co.com.sofka.model.count.User;
import co.com.sofka.model.count.gateways.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddUserUseCase {

    private final UserRepository userRepository;

    public User addUser(User user){
        return userRepository.addUser(user);
    }
}
