package co.com.sofka.usecase.publication;


import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddCommentUseCase{

    private final PublicationRepository publicationRepository;

    public Comment addComment(Comment comment){
        return publicationRepository.addComment(comment);
    }

}
