package co.com.sofka.mongo;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.mongo.entity.CommentEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface CommentMongoDBRepository extends MongoRepository<CommentEntity, String> , QueryByExampleExecutor<CommentEntity> {

}
