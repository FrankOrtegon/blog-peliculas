package co.com.sofka.model.publication.values;

import java.util.Objects;

public class Content {
    private final String value;

    public Content(String value) {
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
        Content content = (Content) o;
        return Objects.equals(value, content.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
