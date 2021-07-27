package co.com.sofka.model.count.entity;

import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.count.values.Name;
import co.com.sofka.model.count.values.UrlPhoto;

public class User {

    private IdUser idUser;
    private Name name;
    private UrlPhoto urlPhoto;

    public User() {
    }

    public User(IdUser idUser, Name name, UrlPhoto urlPhoto) {
        this.idUser = idUser;
        this.name = name;
        this.urlPhoto = urlPhoto;
    }
}
