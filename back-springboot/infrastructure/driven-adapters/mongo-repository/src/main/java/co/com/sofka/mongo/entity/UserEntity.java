package co.com.sofka.mongo.entity;

import co.com.sofka.model.count.values.Email;
import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.count.values.UrlPhoto;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserEntity {

    @Id
    private IdUser idUser;
    private Email email;
    private UrlPhoto urlPhoto;

    public UserEntity() {
    }

    public UserEntity(IdUser idUser, Email email, UrlPhoto urlPhoto) {
        this.idUser = idUser;
        this.email = email;
        this.urlPhoto = urlPhoto;
    }

    public IdUser getIdUser() {
        return idUser;
    }

    public void setIdUser(IdUser idUser) {
        this.idUser = idUser;
    }

    public Email getEmail() {
        return email;
    }

    public void setEmail(Email email) {
        this.email = email;
    }

    public UrlPhoto getUrlPhoto() {
        return urlPhoto;
    }

    public void setUrlPhoto(UrlPhoto urlPhoto) {
        this.urlPhoto = urlPhoto;
    }
}
