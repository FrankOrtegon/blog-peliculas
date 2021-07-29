package co.com.sofka.model.publication.values;

import java.util.Objects;

public class TypeCategory {
    private final String type;

    public TypeCategory(String type) {
        this.type = Objects.requireNonNull(type,"Category type is required");
        if(this.type.isEmpty()){
            throw new IllegalArgumentException("Category type cannot be empty");
        }
    }

    public String getType(){
        return type;
    }

    public static TypeCategory of(String type){
        return new TypeCategory(type);
    }
}
