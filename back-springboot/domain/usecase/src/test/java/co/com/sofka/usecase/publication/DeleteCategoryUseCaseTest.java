package co.com.sofka.usecase.publication;

import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.gateways.CategoryRepository;
import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.model.publication.values.TypeCategory;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = DeleteCategoryUseCase.class)
class DeleteCategoryUseCaseTest {

    @MockBean
    CategoryRepository categoryRepository;

    @Autowired
    DeleteCategoryUseCase deleteCategoryUseCase;

    @Test
    @DisplayName("Eliminar Categoria")
     void deleteCategory(){
        Category category = new Category("1", TypeCategory.of("Accion"));

        //Mockito.when(categoryRepository.deleteByIdCateogry(category.getIdCategory())).thenReturn(null);

        //Category result = deleteCategoryUseCase.deleteCateogry(category.getIdCategory());
    }
}