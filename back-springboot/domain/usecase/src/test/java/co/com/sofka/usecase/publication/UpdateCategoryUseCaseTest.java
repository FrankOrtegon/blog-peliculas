package co.com.sofka.usecase.publication;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import co.com.sofka.model.publication.gateways.CommentRepository;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdPublication;
import co.com.sofka.model.publication.values.TypeCategory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest(classes = UpdateCategoryUseCase.class)
class UpdateCategoryUseCaseTest {

    @MockBean
    CategoryRepository categoryRepository;
    @Autowired
    UpdateCategoryUseCase updateCategoryUseCase;

    @Test
    @DisplayName("Actualizar Categoria")
     void updateCategory(){
        Category category = new Category("1", TypeCategory.of("Accion"));

        Mockito.when(categoryRepository.updateCategory(category)).thenReturn(category);

        Category result = updateCategoryUseCase.updateCategory(category);
        Assertions.assertEquals(category.getIdCategory(),result.getIdCategory());
        Assertions.assertEquals(category.getType(),result.getType());
    }

}