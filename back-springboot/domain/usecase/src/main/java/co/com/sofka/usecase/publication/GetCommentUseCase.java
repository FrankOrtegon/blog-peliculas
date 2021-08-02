package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CommentRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class GetCommentUseCase {
    private final CommentRepository commentRepository;

    public List<Comment> getAllComment(){
        return commentRepository.getAllComment();
    }
}
