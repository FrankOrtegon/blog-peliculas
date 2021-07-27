package co.com.sofka.model.publication.values;

import java.util.Objects;

public class IdCategory {

    private final String value;

    public IdCategory(String value) {
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
        IdCategory that = (IdCategory) o;
        return Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
