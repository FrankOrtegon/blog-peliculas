package co.com.sofka.model.publication.gateways;

import co.com.sofka.model.publication.Publication;

public interface PublicationRepository {

    Publication createPublication(Publication publication);
    Publication addVote(Publication publication);
}
