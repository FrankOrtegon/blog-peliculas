package co.com.sofka.model.publication.gateways;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.Comment;

public interface CommentRepository {
    Comment addComment(Comment comment);
    Comment findByIdComment(String id);
    void deleteByIdComment(String id);


}
