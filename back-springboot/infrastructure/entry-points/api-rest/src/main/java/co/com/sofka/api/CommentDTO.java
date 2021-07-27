package co.com.sofka.api;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdPublication;

public class CommentDTO {

    private String idComment;
    private IdPublication idPublication;
    private IdCount idCount;
    private Content content;

    public CommentDTO() {
    }

    public CommentDTO(String idComment, IdPublication idPublication, IdCount idCount, Content content) {
        this.idComment = idComment;
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.content = content;
    }

    public String getIdComment() {
        return idComment;
    }

    public void setIdComment(String idComment) {
        this.idComment = idComment;
    }

    public IdPublication getIdPublication() {
        return idPublication;
    }

    public void setIdPublication(IdPublication idPublication) {
        this.idPublication = idPublication;
    }

    public IdCount getIdCount() {
        return idCount;
    }

    public void setIdCount(IdCount idCount) {
        this.idCount = idCount;
    }

    public Content getContent() {
        return content;
    }

    public void setContent(Content content) {
        this.content = content;
    }
}
