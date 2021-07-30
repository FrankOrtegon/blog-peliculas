package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.gateways.CommentRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteCommentUseCase {

    private final CommentRepository commentRepository;

    public void deleteCommentary(String id){
        commentRepository.deleteByIdComment(id);
    }

}
