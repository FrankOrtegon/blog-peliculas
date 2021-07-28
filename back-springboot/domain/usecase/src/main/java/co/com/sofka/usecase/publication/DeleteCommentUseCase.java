package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DeleteCommentUseCase {
    private final PublicationRepository publicationRepository;

    public void deleteCommentary(String id){
        publicationRepository.deleteComment(id);
    }
}
