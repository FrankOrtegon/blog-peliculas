package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import co.com.sofka.model.publication.values.TypeCategory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.ArgumentMatchers.any;



@SpringBootTest(classes = AddCategoryUseCase.class)
class AddCategoryUseCaseTest {

    @MockBean
    CategoryRepository categoryRepository;

    @Autowired
    AddCategoryUseCase addCategoryUseCase;

    @Test
    @DisplayName("Crear Categoria")
    void addCategory(){
        Category category = new Category("1", TypeCategory.of("Accion"));

        Mockito.when(categoryRepository.addCategory(any())).thenReturn(category);

        Category result = addCategoryUseCase.addCategory(category);

        Assertions.assertEquals(category.getIdCategory(),result.getIdCategory());
        Assertions.assertEquals(category.getType(),result.getType());
    }

}