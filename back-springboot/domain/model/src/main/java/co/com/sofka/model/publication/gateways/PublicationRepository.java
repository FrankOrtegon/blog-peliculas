package co.com.sofka.model.publication.gateways;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.Comment;

public interface PublicationRepository {
    Comment addComment(Comment comment);
    Comment findByIdComment(String id);
    void deleteByIdComment(String id);
    Category addCategory(Category category);
    Category updateCategory(Category category);

}
