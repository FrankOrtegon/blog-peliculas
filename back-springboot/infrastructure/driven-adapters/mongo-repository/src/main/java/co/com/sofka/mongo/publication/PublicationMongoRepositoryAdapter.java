package co.com.sofka.mongo.publication;


import co.com.sofka.model.publication.Publication;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import co.com.sofka.mongo.entity.PublicationEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;


@Repository
public class PublicationMongoRepositoryAdapter extends AdapterOperations<PublicationEntity,PublicationEntity,String,PublicationMongoDBRepository>
implements PublicationRepository
{

    public PublicationMongoRepositoryAdapter(PublicationMongoDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d,PublicationEntity.class));
    }

    @Override
    public Publication createPublication(Publication publication) {
        PublicationEntity publicationEntity = new PublicationEntity(
                publication.getIdPublication(),
                publication.getIdCount(),
                publication.getCategory(),
                publication.getTitle(),
                publication.getText(),
                publication.getVote());
        this.repository.save(publicationEntity);
        return publication;
    }

    @Override
    public Publication addVote(Publication publication) {
        PublicationEntity publicationEntity = new PublicationEntity();
        publicationEntity.setIdPublication(publication.getIdPublication());
        publicationEntity.setIdCount(publication.getIdCount());
        publicationEntity.setCategory(publication.getCategory());
        publicationEntity.setTitle(publication.getTitle());
        publicationEntity.setText(publication.getText());
        publicationEntity.setVote(publication.getVote()+1);
        repository.save(publicationEntity);
        return publication;
    }
}
