package co.com.sofka.usecase.publication;


import co.com.sofka.model.publication.entity.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddCommentUseCase {

    private final PublicationRepository publicationRepository;

    private Comment addComment(Comment comment){
        return publicationRepository.addComment(comment);
    }

}
