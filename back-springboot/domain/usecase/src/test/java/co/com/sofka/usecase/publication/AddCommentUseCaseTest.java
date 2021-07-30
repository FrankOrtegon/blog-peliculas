package co.com.sofka.usecase.publication;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.CommentRepository;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdPublication;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.mockito.ArgumentMatchers.any;



@SpringBootTest(classes = AddCommentUseCase.class)
class AddCommentUseCaseTest {

    @MockBean
    CommentRepository commentRepository;
    @Autowired
    AddCommentUseCase addCommentUseCase;

    @Test
    @DisplayName("Crear comentario")
    void test(){
        Comment comment = new Comment("1",IdPublication.of("12"),IdCount.of("1233"),Content.of("Ojala"));

        Mockito.when(commentRepository.addComment(any())).thenReturn(comment);

        Comment result = addCommentUseCase.addComment(comment);
        Assertions.assertEquals(comment.getIdComment(),result.getIdComment());
        Assertions.assertEquals(comment.getContent(),comment.getContent());

    }

}