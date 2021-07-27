package co.com.sofka.model.publication.entity;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdComment;
import co.com.sofka.model.publication.values.IdPublication;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Comment {

    private String id;
    private IdComment idComment;
    private IdPublication idPublication;
    private IdCount idCount;
    private Content content;

    public Comment() {
    }

    public Comment(String id, IdComment idComment, IdPublication idPublication, IdCount idCount, Content content) {
        this.id = id;
        this.idComment = idComment;
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.content = content;
    }

}



