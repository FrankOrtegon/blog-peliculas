package co.com.sofka.model.publication.values;

import java.util.Objects;

public class Text {
    private final String text;

    public Text(String text) {
        this.text = Objects.requireNonNull(text,"Text is required");
        if(this.text.isEmpty()){
            throw new IllegalArgumentException("Text cannot be empty");
        }
    }

    public String getText(){
        return text;
    }
}
