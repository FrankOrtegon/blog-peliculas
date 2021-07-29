package co.com.sofka.mongo.entity;

import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.model.publication.values.TypeCategory;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CategoryEntity {

    @Id
    private String idCategory;
    private TypeCategory type;
    public CategoryEntity() {
    }

    public CategoryEntity(String idCategory, TypeCategory type) {
        this.idCategory = idCategory;
        this.type = type;
    }

    public String getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(String idCategory) {
        this.idCategory = idCategory;
    }

    public TypeCategory getType() {
        return type;
    }

    public void setType(TypeCategory type) {
        this.type = type;
    }
}
