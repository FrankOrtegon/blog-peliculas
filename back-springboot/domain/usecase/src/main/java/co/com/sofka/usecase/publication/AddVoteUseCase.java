package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Publication;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddVoteUseCase {

    private final PublicationRepository publicationRepository;

    public Publication addVoteToPublication(Publication publication){
        return publicationRepository.addVote(publication);
    }
}
