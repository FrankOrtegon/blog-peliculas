

package co.com.sofka.mongo.publication;
import co.com.sofka.mongo.entity.CommentEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface CommentMongoDBRepository extends MongoRepository<CommentEntity, String> , QueryByExampleExecutor<CommentEntity> {

}
