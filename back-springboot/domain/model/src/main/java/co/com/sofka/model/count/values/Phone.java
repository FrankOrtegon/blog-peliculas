package co.com.sofka.model.count.values;

import java.util.Objects;

public class Phone {
    private final String value;

    public Phone(String value) {
        this.value = Objects.requireNonNull(value, "phone is required");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("phone cannot be empty");
        }
    }

    public static Phone of(String phone){
        return new Phone(phone);
    }

    public String getValue(){
        return value;
    }


}
