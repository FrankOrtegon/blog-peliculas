package co.com.sofka.model.count.values;

public class IdUser {
    private final String idUser;

    public IdUser(String idUser) {
        this.idUser = idUser;
    }

    public String getIdUser(){
        return idUser;
    }

    public static IdUser of(String idUser){
        return new IdUser(idUser);
    }


}
