package co.com.sofka.model.publication.values;

import java.util.Objects;

public class Content {
    private final String value;

    public Content(String value) {
        this.value = Objects.requireNonNull(value,"Content is required");
        if (this.value.isEmpty()){
            throw new IllegalArgumentException("Content cannot be empty");
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
