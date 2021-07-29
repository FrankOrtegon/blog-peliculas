package co.com.sofka.api.publication;

import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.model.publication.values.TypeCategory;

public class CategoryDTO {

    private IdCategory idCategory;
    private TypeCategory type;

    public CategoryDTO() {
    }

    public CategoryDTO(IdCategory idCategory, TypeCategory type) {
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
