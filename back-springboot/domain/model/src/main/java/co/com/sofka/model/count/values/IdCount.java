package co.com.sofka.model.count.values;

import java.util.Objects;

public class IdCount {
    private final String idCount;

    public IdCount(String idCount) {
        this.idCount = Objects.requireNonNull(idCount,"la fecha es requerido");
        if (this.idCount.isEmpty()){
            throw new IllegalArgumentException("el campo fecha no puede ser vacio");
        }
    }

    public String getIdCount(){
        return idCount;
    }

    public static IdCount of(String idCount){
        return new IdCount(idCount);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IdCount idCount1 = (IdCount) o;
        return Objects.equals(idCount, idCount1.idCount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCount);
    }
}
