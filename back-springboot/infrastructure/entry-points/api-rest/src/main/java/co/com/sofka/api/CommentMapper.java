package co.com.sofka.api;

import co.com.sofka.model.publication.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentMapper {

    public Comment fromToModel(CommentDTO commentDTO){
        Comment comment = new Comment();
        comment.setIdComment(commentDTO.getIdComment());
        comment.setIdPublication(commentDTO.getIdPublication());
        comment.setIdCount(commentDTO.getIdCount());
        comment.setContent(commentDTO.getContent());
        return comment;
    }

    public CommentDTO fromDTO(Comment comment){
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setIdComment(comment.getIdComment());
        commentDTO.setIdPublication(comment.getIdPublication());
        commentDTO.setIdCount(comment.getIdCount());
        commentDTO.setContent(comment.getContent());
        return commentDTO;
    }


}
