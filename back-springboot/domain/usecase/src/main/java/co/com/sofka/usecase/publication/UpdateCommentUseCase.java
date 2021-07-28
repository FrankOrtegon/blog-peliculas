package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateCommentUseCase {

    private final PublicationRepository publicationRepository;

    public Comment updateComment(Comment comment){
        return publicationRepository.updateComment(comment);
    }
}
