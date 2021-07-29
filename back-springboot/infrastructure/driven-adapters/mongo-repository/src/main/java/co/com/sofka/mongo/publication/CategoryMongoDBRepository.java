package co.com.sofka.mongo.publication;

import co.com.sofka.mongo.entity.CategoryEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

public interface CategoryMongoDBRepository extends MongoRepository<CategoryEntity, String>, QueryByExampleExecutor<CategoryEntity> {

}

