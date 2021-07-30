package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CommentRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateCommentUseCase {

    private final CommentRepository commentRepository;

    public Comment updateComment(Comment comment){
        return commentRepository.updateComment(comment);
    }
}
