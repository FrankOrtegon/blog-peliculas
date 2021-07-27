package co.com.sofka.model.count.values;

import java.io.ObjectInputValidation;
import java.util.Objects;

public class Name {
    private final String value;

    public Name(String value) {
        this.value = Objects.requireNonNull(value,"name is required");
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("name cannot be empty");
        }
    }

    public String getValue(){
        return value;
    }
}
