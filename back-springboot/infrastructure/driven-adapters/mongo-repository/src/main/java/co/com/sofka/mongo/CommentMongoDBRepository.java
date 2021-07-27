package co.com.sofka.mongo;

import co.com.sofka.model.publication.entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface CommentMongoDBRepository extends MongoRepository<Comment, String> , QueryByExampleExecutor<Comment> {
}
