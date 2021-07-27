package co.com.sofka.model.publication.values;

import java.util.Objects;

public class Title {
    private final String title;

    public Title(String title) {
        this.title = Objects.requireNonNull(title,"Title is required");
        if(this.title.isEmpty()){
            throw new IllegalArgumentException("Title cannot be empty");
        }
    }

    public String getTitle(){
        return title;
    }
}
