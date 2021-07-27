package co.com.sofka.usecase.publication;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdPublication;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AddCommentUseCaseTest {

    @MockBean
    PublicationRepository publicationRepository;
    @Autowired
    AddCommentUseCase addCommentUseCase;

    @Test
    @DisplayName("Crear comentario")
    public void test(){
        Comment comment = new Comment();
        comment.setIdComment("1");
        comment.setIdPublication(
                new IdPublication("12")
        );
        comment.setIdCount(
                new IdCount("123")
        );
        comment.setContent(
                new Content("Si se puede")
        );

    }

}