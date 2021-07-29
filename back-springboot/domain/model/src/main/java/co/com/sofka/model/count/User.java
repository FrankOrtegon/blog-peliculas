package co.com.sofka.model.count;

import co.com.sofka.model.count.values.Email;
import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.count.values.UrlPhoto;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class User {

    private IdUser idUser;
    private Email email;
    private UrlPhoto urlPhoto;

    public User() {
    }

    public User(IdUser idUser, Email email, UrlPhoto urlPhoto) {
        this.idUser = idUser;
        this.email = email;
        this.urlPhoto = urlPhoto;
    }
}
