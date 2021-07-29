package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CommentRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteCommentUseCase {

    private final CommentRepository commentRepository;

    public Comment findComment(Comment comment){
        return commentRepository.findByIdComment(comment.getIdComment());
    }

}
