package co.com.sofka.mongo;

import co.com.sofka.mongo.entity.CountEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface CountMongoDBRepository extends MongoRepository<CountEntity,String>, QueryByExampleExecutor<CountEntity> {
}
