package co.com.sofka.model.count.values;

public class IdCount {
    private final String idCount;

    public IdCount(String idCount) {
        this.idCount = idCount;
    }

    public static IdCount of(String idCount){
        return new IdCount(idCount);
    }
}
