package co.com.sofka.api.publication;
import co.com.sofka.model.publication.values.TypeCategory;

public class CategoryDTO {

    private String idCategory;
    private TypeCategory type;

    public CategoryDTO() {
    }

    public CategoryDTO(String idCategory, TypeCategory type) {
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
