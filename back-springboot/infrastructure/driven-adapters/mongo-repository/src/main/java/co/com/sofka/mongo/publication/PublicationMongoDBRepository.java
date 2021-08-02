package co.com.sofka.mongo.publication;

import co.com.sofka.model.publication.Publication;
import co.com.sofka.mongo.entity.PublicationEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface PublicationMongoDBRepository extends MongoRepository<PublicationEntity,String>, QueryByExampleExecutor<PublicationEntity> {

}
