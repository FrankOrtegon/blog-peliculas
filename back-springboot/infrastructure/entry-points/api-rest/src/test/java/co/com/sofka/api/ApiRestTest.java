package co.com.sofka.api;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.values.Content;
import co.com.sofka.model.publication.values.IdPublication;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.is;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.doThrow;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Lists;
import org.springframework.http.MediaType;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;

@SpringBootTest(classes = AddCommentUseCase.class)
@AutoConfigureMockMvc
class ApiRestTest {

    @MockBean
    private AddCommentUseCase addCommentUseCase;
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void postComment() throws Exception{

        //Arrange
        Comment comment = new Comment("1",IdPublication.of("12"),IdCount.of("1233"),Content.of("Ojala"));
        Comment commentReturn = new Comment("1",IdPublication.of("12"),IdCount.of("1233"),Content.of("Ojala"));

        doReturn(commentReturn).when(addCommentUseCase).addComment(any());

        //Act && Assert
        mockMvc.perform(post("/api/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(comment)))

                // Validate the response code and content type
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))

                .andExpect(header().string(HttpHeaders.LOCATION, ""))

                // Validate the returned fields
                .andExpect(jsonPath("$.idComment",is("1")))
                .andExpect(jsonPath("$.idPublication", is("12")))
                .andExpect(jsonPath("$.idCount", is("1233")))
                .andExpect(jsonPath("$.content", is("Ojala")));
    }

    static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}