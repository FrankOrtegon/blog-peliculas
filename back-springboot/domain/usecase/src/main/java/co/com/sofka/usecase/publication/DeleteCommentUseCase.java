package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteCommentUseCase {

    private final PublicationRepository publicationRepository;

    public Comment findComment(Comment comment){
        return publicationRepository.findByIdComment(comment.getIdComment());
    }

}
