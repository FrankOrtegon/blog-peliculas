package co.com.sofka.api;
import co.com.sofka.model.count.Count;
import co.com.sofka.model.publication.Comment;
import co.com.sofka.usecase.count.AddCountUseCase;
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
    private final AddCountUseCase addCountUseCase;
    private final CountMapper countMapper;


    @PostMapping(path = "/add")
    public CommentDTO addCommentary(@RequestBody CommentDTO commentDTO) {
        Comment comment = commentMapper.fromDTO(commentDTO);
      return commentMapper.fromModel(addCommentUseCase.addComment(comment));
    }

    @PostMapping(path = "/add/count")
    public CountDTO addCount(@RequestBody CountDTO countDTO) {
        Count count = countMapper.fromModel(countDTO);
        return countMapper.fromDTO(addCountUseCase.addCount(count));
    }
}
