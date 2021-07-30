package co.com.sofka.model.publication.gateways;



import co.com.sofka.model.publication.Comment;

public interface CommentRepository {
    Comment addComment(Comment comment);
    Comment findByIdComment(String id);
    Comment save(Comment comment);
    Comment updateComment(Comment comment);
    void deleteByIdComment(String id);

}
