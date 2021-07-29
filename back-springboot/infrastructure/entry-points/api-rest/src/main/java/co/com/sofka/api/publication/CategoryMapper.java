package co.com.sofka.api.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.Comment;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public Category fromToModel(CategoryDTO categoryDTO){
        Category category = new Category();
        category.setIdCategory(categoryDTO.getIdCategory());
        category.setType(categoryDTO.getType());
        return category;
    }

    public CategoryDTO fromDTO(Category category){
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setIdCategory(category.getIdCategory());
        categoryDTO.setType(category.getType());
        return categoryDTO;
    }
}
