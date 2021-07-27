package co.com.sofka.model.count.values;

import java.util.Objects;

public class Email {
    private final String value;

    public Email(String value) {
        this.value = Objects.requireNonNull(value, "email is required");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("email cannot be empty");
        }
    }

    public String getValue(){
        return value;
    }


}
