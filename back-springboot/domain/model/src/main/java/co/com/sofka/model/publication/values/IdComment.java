package co.com.sofka.model.publication.values;

import java.util.Objects;

public class IdComment {
    private final String value;

    public IdComment(String value) {
        this.value = Objects.requireNonNull(value,"la fecha es requerido");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("el campo fecha no puede ser vacio");
        }
    }

    public String getValue(){
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IdComment idComment = (IdComment) o;
        return Objects.equals(value, idComment.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
