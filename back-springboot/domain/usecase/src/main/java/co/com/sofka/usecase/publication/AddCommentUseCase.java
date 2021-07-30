package co.com.sofka.usecase.publication;


import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CommentRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddCommentUseCase {

    private final CommentRepository commentRepository;


    public Comment addCommentary(Comment comment) {
        return commentRepository.addComment(comment);
    }
}
