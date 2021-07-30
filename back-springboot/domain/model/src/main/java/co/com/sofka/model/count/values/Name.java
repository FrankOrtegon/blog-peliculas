package co.com.sofka.model.count.values;

import java.util.Objects;

public class Name {
    private final String value;

    public Name(String value) {
        this.value = Objects.requireNonNull(value,"Name is required");
        if(this.value.isEmpty()){
            throw new IllegalArgumentException("Name cannot be empty");
        }
    }
    public static Name of(String name){
        return new Name(name);
    }

    public String getValue(){
        return value;
    }
}
