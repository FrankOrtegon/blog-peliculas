package co.com.sofka.mongo.entity;

import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.model.publication.values.TypeCategory;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CategoryEntity {

    @Id
    private IdCategory idCategory;
    private TypeCategory type;

    public CategoryEntity() {
    }

    public CategoryEntity(IdCategory idCategory, TypeCategory type) {
        this.idCategory = idCategory;
        this.type = type;
    }

    public IdCategory getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(IdCategory idCategory) {
        this.idCategory = idCategory;
    }

    public TypeCategory getType() {
        return type;
    }

    public void setType(TypeCategory type) {
        this.type = type;
    }
}
