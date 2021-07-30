package co.com.sofka.model.publication.values;

import java.util.Objects;

public class IdCategory {

    private final String value;

    public IdCategory(String value) {
        this.value = Objects.requireNonNull(value,"IdCategory is required");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("IdCategory cannot be empty");
        }
    }

    public String getValue(){
        return value;
    }


}
