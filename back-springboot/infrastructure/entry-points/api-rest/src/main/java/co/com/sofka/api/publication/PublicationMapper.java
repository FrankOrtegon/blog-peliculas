package co.com.sofka.api.publication;

import co.com.sofka.model.publication.Publication;
import org.springframework.stereotype.Component;

@Component
public class PublicationMapper {

    public Publication fromModel(PublicationDTO publicationDTO){
        Publication publication = new Publication();
        publication.setIdPublication(publicationDTO.getIdPublication());
        publication.setIdCount(publicationDTO.getIdCount());
        publication.setCategory(publicationDTO.getCategory());
        publication.setTitle(publicationDTO.getTitle());
        publication.setText(publicationDTO.getText());
        publication.setVote(publicationDTO.getVote());
        return publication;
    }

    public PublicationDTO fromDTO(Publication publication){
        PublicationDTO publicationDTO = new PublicationDTO();
        publicationDTO.setIdPublication(publication.getIdPublication());
        publicationDTO.setIdCount(publication.getIdCount());
        publicationDTO.setCategory(publication.getCategory());
        publicationDTO.setTitle(publication.getTitle());
        publicationDTO.setText(publicationDTO.getText());
        publicationDTO.setVote(publicationDTO.getVote());
        return publicationDTO;
    }
}
