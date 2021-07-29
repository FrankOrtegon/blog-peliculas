package co.com.sofka.mongo.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import co.com.sofka.model.publication.gateways.CommentRepository;
import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.mongo.entity.CategoryEntity;
import co.com.sofka.mongo.entity.CommentEntity;
import co.com.sofka.mongo.entity.CountEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryMongoRepositoryAdapter extends AdapterOperations<CategoryEntity,CategoryEntity,String,CategoryMongoDBRepository> implements CategoryRepository {

    public CategoryMongoRepositoryAdapter(CategoryMongoDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, CategoryEntity.class));
    }
    @Override
    public Category addCategory(Category category) {
        CategoryEntity categoryEntity = new CategoryEntity(category.getIdCategory(), category.getType());
        this.repository.save(categoryEntity);
        Category category1 = category;
        return category1;
    }

    @Override
    public Category updateCategory(Category category) {
        CategoryEntity categoryEntity = new CategoryEntity();
        categoryEntity.setIdCategory(category.getIdCategory());
        categoryEntity.setType(category.getType());
        this.repository.save(categoryEntity);
        return category;
    }

    @Override
    public void deleteByIdCateogry(IdCategory idCategory) {
        this.repository.deleteById(idCategory.getValue());
    }
}
