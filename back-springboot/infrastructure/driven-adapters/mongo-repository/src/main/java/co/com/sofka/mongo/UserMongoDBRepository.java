package co.com.sofka.mongo;

import co.com.sofka.mongo.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface UserMongoDBRepository extends MongoRepository<UserEntity,String>, QueryByExampleExecutor<UserEntity> {
}
