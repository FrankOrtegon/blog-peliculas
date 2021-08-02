package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Publication;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CreatePublicationUseCase {

    private final PublicationRepository publicationRepository;

    public Publication createPublication(Publication publication){
        return publicationRepository.createPublication(publication);
    }
}
