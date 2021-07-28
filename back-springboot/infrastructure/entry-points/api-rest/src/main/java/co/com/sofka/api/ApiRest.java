package co.com.sofka.api;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import co.com.sofka.usecase.publication.DeleteCommentUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
    private final AddCommentUseCase addCommentUseCase;
    private final CommentMapper commentMapper;
    private final DeleteCommentUseCase deleteCommentUseCase;


    @PostMapping(path = "/add")
    public CommentDTO addCommentary(@RequestBody CommentDTO commentDTO) {
        Comment comment = commentMapper.fromDTO(commentDTO);
      return commentMapper.fromModel(addCommentUseCase.addComment(comment));
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteCommentary(@PathVariable String id){
        Comment comment = new Comment();
        deleteCommentUseCase.findComment(comment);
    }
}
