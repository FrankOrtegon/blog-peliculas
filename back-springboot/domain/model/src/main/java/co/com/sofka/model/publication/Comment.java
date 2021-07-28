package co.com.sofka.model.publication;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdComment;
import co.com.sofka.model.publication.values.IdPublication;
import lombok.Builder;
import lombok.Data;

@Data

public class Comment {


    private String idComment;
    private String idCount;
    private IdPublication idPublication;
    private Content content;

    public Comment() {
    }

    public Comment(String idComment, IdPublication idPublication, String idCount, Content content) {
        this.idComment = idComment;
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.content = content;
    }

}



