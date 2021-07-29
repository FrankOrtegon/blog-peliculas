package co.com.sofka.api;

import co.com.sofka.model.count.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User fromModel(UserDTO userDTO){
        User user = new User();
        user.setIdUser(userDTO.getIdUser());
        user.setEmail(userDTO.getEmail());
        user.setUrlPhoto(userDTO.getUrlPhoto());
        return user;
    }

    public UserDTO fromDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(user.getIdUser());
        userDTO.setEmail(user.getEmail());
        userDTO.setUrlPhoto(user.getUrlPhoto());
        return userDTO;
    }
}
