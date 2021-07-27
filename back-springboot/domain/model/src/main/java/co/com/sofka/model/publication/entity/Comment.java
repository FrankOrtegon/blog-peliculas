package co.com.sofka.model.publication.entity;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdComment;
import co.com.sofka.model.publication.values.IdPublication;

public class Comment {

    private IdComment idComment;
    private IdPublication idPublication;
    private IdCount idCount;
    private Content content;

    public Comment() {
    }

    public Comment(IdComment idComment, IdPublication idPublication, IdCount idCount, Content content) {
        this.idComment = idComment;
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.content = content;
    }
}
