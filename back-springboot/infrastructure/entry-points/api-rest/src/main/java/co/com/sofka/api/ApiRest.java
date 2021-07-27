package co.com.sofka.api;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.usecase.publication.AddCommentUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class ApiRest {
    private final AddCommentUseCase addCommentUseCase;
    private final CommentMapper commentMapper;


    @PostMapping(path = "/add")
    public CommentDTO addCommentary(@RequestBody CommentDTO commentDTO) {
        Comment comment = commentMapper.fromDTO(commentDTO);
      return commentMapper.fromModel(addCommentUseCase.addComment(comment));
    }
}
