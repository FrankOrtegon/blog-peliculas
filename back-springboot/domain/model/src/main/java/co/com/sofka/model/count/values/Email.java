package co.com.sofka.model.count.values;

import java.util.Objects;

public class Email {
    private final String value;

    public Email(String value) {
        this.value = Objects.requireNonNull(value,"Email is required");
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("Email cannot be empty");
        }
    }
    public static Email of(String email){
        return new Email(email);
    }

    public String getValue(){
        return value;
    }
}
